"use client";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Button from "../Button.js";
import HeaderNav from "./HeaderNav.js";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const route = useRouter();

  function handleRoute() {
    route.push("/signup");
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-[#060610] opacity-60"></div>
      <div className="relative flex justify-between items-center px-4 py-2">
        <Link className="flex items-center" href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            width={60}
            height={60}
            quality={80}
            loading="lazy"
          />
          <p className="text-white font-bold text-2xl">SynthArt</p>
        </Link>
        <nav>
          <HeaderNav />
        </nav>
        <div className="flex items-center gap-4">
          <Button className="px-4" onClick={handleRoute}>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
