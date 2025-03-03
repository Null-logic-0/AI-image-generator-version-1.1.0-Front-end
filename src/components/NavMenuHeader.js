import Image from "next/image";
import Logo from "../../public/logo.png";
import NavMenuButton from "./NavMenuButton.js";

function NavMenuHeader() {
  return (
    <div className="flex justify-between pr-4 pb-10 items-center">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <h3 className="text-white font-bold text-xl">SynthArt</h3>
      </div>

      <NavMenuButton />
    </div>
  );
}

export default NavMenuHeader;
