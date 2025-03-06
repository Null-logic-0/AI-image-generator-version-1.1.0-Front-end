"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import {
  loginUser,
  signupUser,
  updateUserData,
  updateUserPassword,
} from "./data-services.js";
import { redirect } from "next/navigation";
import { getCookies } from "./cookies.js";

const URL = process.env.LOCAL_DATA_URL || process.env.DATA_URL;

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
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
  }
  const response = await fetch(`${URL}/flux-schnell/generate-image`, {
    method: "POST",
    body: JSON.stringify({ prompt, options }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to generate image, check your input.");
  }

  const buffer = await response.arrayBuffer();
  const base64Image = Buffer.from(buffer).toString("base64");

  return `data:image/png;base64,${base64Image}`;
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
