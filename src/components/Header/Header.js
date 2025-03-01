import Image from "next/image";
import Logo from "../../../public/logo.png";
import Button from "../Button.js";
import HeaderNav from "./HeaderNav.js";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-[#060610] opacity-60"></div>
      <div className="relative flex justify-between items-center px-8 py-2">
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
        <div>
          <Button className="px-8">Sign up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
