"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { loginUser, signupUser, URL } from "./data-services.js";
import { redirect } from "next/navigation";

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
  const res = await fetch(`${URL}/users/logout`);

  if (!res.ok) {
    redirect("/error");
  }

  redirect("/");
}
