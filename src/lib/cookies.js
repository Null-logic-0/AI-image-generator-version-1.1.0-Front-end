"use server";

import { cookies } from "next/headers";

export async function getCookies() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return { success: false, message: "Unauthorized: No token", token: null };
    }

    return { success: true, token };
  } catch (error) {
    return { success: false, message: error.message, token: null };
  }
}
