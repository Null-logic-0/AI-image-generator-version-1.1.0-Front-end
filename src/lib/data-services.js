"use server";
import { cookies } from "next/headers";

const URL = process.env.LOCAL_DATA_URL || process.env.DATA_URL;

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
      });
    }

    return { success: true, data: resData };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function signupUser(name, email, password, passwordConfirm) {
  return await auth("signup", { name, email, password, passwordConfirm });
}

export async function loginUser(email, password) {
  return await auth("login", { email, password });
}

export async function getUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return { success: false, message: "No token found" };
    }

    const res = await fetch(`${URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return { success: false, message: "Failed to fetch user data" };
    }

    const { data } = await res.json();
    return { success: true, user: data.user };
  } catch (error) {
    console.error("Fetch user error:", error);
    return {
      success: false,
      message: "Something went wrong while fetching user data.",
    };
  }
}

export async function updateUserData(name, photo) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return { success: false, message: "Unauthorized: No token found" };
  }

  const formData = new FormData();
  formData.append("name", name);
  if (photo) {
    formData.append("photo", photo);
  } else {
    return { success: false, message: "Invalid file format" };
  }

  try {
    const response = await fetch(`${URL}/users/updateMe`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const resData = await response.json();
    if (!response.ok) {
      return { success: false, message: resData.message || "Update failed" };
    }

    return { success: true, data: resData };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}

export async function updateUserPassword(
  passwordCurrent,
  password,
  passwordConfirm
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return { success: false, message: "Unathorized:No token" };
  }

  const res = await fetch(`${URL}/users/updateMypassword`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      passwordCurrent,
      password,
      passwordConfirm,
    }),
  });

  const resData = await res.json();

  if (!res.ok) {
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
  return { success: true, message: "Password updated successfully!" };
}

export async function sendImageRequest(prompt, options) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return { success: false, message: "Unathorized:No token" };
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

export async function getUserImages() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return { success: false, message: "Unauthorized: No token" };
    }

    const response = await fetch(`${URL}/flux-schnell/user-images`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return { success: false, message: "failed to fetch data" };
    }

    const images = await response.json();
    return { success: true, data: images };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
