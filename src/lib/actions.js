"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  loginUser,
  sendImageRequest,
  signupUser,
  updateUserData,
  updateUserPassword,
} from "./data-services.js";
import { redirect } from "next/navigation";

const URL = process.env.LOCAL_DATA_URL;

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

export async function updatePassword(formData) {
  const passwordCurrent = formData.get("passwordCurrent");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  console.log("passwordCurrent", passwordCurrent);
  console.log("password", password);
  console.log("passwordConfirm", passwordConfirm);

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
