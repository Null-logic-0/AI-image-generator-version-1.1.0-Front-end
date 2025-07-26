import LoginForm from "@/components/AuthForm/LoginForm";
import Link from "next/link";
import Image from "next/image";

import AuthHeaderButtons from "@/components/AuthHeaderButtons";

export const metadata = {
  title: "SynthArt | Login into your account",
};

function LoginPage() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="absolute inset-0 bg-[#060610] opacity-60"></div>
        <div className="relative flex justify-between items-center px-4 py-2">
          <Link className="flex items-center" href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              quality={80}
              loading="lazy"
            />
            <p className="text-white font-bold text-2xl">SynthArt</p>
          </Link>
          <AuthHeaderButtons type="login" />
        </div>
      </header>
      <div className="flex justify-center items-center min-h-screen p-4">
        <LoginForm />
      </div>
    </>
  );
}
