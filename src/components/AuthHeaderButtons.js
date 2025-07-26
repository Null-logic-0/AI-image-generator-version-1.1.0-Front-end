"use client";
import Link from "next/link";
import Button from "./Button.js";

function AuthHeaderButtons({ type }) {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" passHref>
        <Button className="px-4">Home</Button>
      </Link>
      {type === "login" ? (
        <Link href="/signup" passHref>
          <Button className="px-4">Sign up</Button>
        </Link>
      ) : (
        <Link href="/login" passHref>
          <Button className="px-4">Login</Button>
        </Link>
      )}
    </div>
  );
}

export default AuthHeaderButtons;
