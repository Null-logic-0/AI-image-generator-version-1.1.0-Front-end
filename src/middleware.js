import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/generate-image", "/account"];

export async function middleware(req) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/generate-image", "/account"],
};
