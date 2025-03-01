import Image from "next/image.js";
import NavItem from "./NavItem.js";
import Profile from "./Profile.js";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Logo from "../../public/logo.png";

function NavMenu() {
  return (
    <aside className="bg-[#181823] pt-5 py-10 fixed h-full top-0 max-w-[288px] w-full flex flex-col justify-between  shadow-md shadow-[#CAFF00] border-r-2 border-[#25232C]">
      <nav>
        <div className="flex justify-between pr-4 pb-10 items-center">
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={50} height={50} />
            <h3 className="text-white font-bold text-xl">SynthArt</h3>
          </div>
          <button className="cursor-pointer">
            <FaArrowUpRightFromSquare />
          </button>
        </div>
        <hr className="mb-5 border-2 border-[#25232C]" />
        <NavItem />
      </nav>
      <div className="px-2">
        <Profile />
      </div>
    </aside>
  );
}

export default NavMenu;
