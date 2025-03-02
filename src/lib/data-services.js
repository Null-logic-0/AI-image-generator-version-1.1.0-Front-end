import { cookies } from "next/headers";

export const URL = process.env.LOCAL_DATA_URL;

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
    console.log(resData);

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
      cookies().set("token", resData.token, {
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
