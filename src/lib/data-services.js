import { getCookies } from "./cookies.js";

const URL = process.env.LOCAL_DATA_URL || process.env.DATA_URL;

export async function getUser() {
  try {
    const { success, token, message } = await getCookies();

    if (!success) {
      return { success: false, message };
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
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
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
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
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

export async function getUserImages() {
  const { success, token, message } = await getCookies();

  if (!success) {
    return { success: false, message };
  }

  const response = await fetch(`${URL}/flux-schnell/user-images`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return { success: false, message: "Failed to fetch data" };
  }

  const images = await response.json();
  return { success: true, data: images };
}
