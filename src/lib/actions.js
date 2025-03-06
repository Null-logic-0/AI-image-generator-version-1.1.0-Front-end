"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { updateUserData, updateUserPassword } from "./data-services.js";
import { getCookies } from "./cookies.js";

const URL = process.env.LOCAL_DATA_URL || process.env.NEXT_PUBLIC_DATA_URL;

async function auth(path, userData) {
  try {
    const response = await fetch(`${URL}/users/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const resData = await response.json();

    if (!response.ok) {
      if (resData.errors) {
        return {
          success: false,
          message: Object.values(resData.errors).join("\n"),
        };
      }

      return {
        success: false,
        message: resData.message || "Action failed. Please try again",
      };
    }

    if (resData.token) {
      const cookieStore = await cookies();

      cookieStore.set("token", resData.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
      });

      return { success: true, data: resData };
    }

    return { success: true, data: resData };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

async function signupUser(name, email, password, passwordConfirm) {
  return await auth("signup", { name, email, password, passwordConfirm });
}

async function loginUser(email, password) {
  return await auth("login", { email, password });
}

export async function signup(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  const res = await signupUser(name, email, password, passwordConfirm);

  if (!res.success) {
    return { success: false, message: res.message };
  }

  revalidatePath("/generate-image", "page");
  redirect("/generate-image");
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await loginUser(email, password);

  if (!res.success) {
    return { success: false, message: res.message };
  }

  revalidatePath("/generate-image", "page");
  redirect("/generate-image");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");

  await fetch(`${URL}/users/logout`);

  revalidatePath("/", "page");
  redirect("/");
}

export async function updateAccountData(formData) {
  const name = formData.get("name");
  const photo = formData.get("photo");

  if (photo && !(photo instanceof File)) {
    return { success: false, message: "Invalid file format" };
  }

  const res = await updateUserData(name, photo);

  if (!res.success) {
    return { success: false, message: res.message };
  }
  revalidatePath("/account", "page");
}

export async function updatePassword(prevState, formData) {
  const passwordCurrent = formData.get("passwordCurrent");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  const res = await updateUserPassword(
    passwordCurrent,
    password,
    passwordConfirm
  );
  if (!res.success) {
    return { success: false, message: res.message };
  }

  await logout();
}

export async function deleteAccount() {
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
  }

  const response = await fetch(`${URL}/users/deleteMe`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete account");
  }

  redirect("/");
}

export async function sendImageRequest(prompt, options) {
  try {
    const { success, token, message } = await getCookies();
    if (!success) return { success: false, message };

    const response = await fetch(`${URL}/flux-schnell/generate-image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt, options }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to generate image.");
    }

    const { imageUrl } = await response.json();
    return { success: true, imageUrl };
  } catch (error) {
    console.error("Error in sendImageRequest:", error.message);
    return { success: false, message: error.message };
  }
}

export async function deleteImage(id) {
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
  }

  const response = await fetch(`${URL}/flux-schnell/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete image");
  }

  revalidatePath("/gallery", "page");
}
