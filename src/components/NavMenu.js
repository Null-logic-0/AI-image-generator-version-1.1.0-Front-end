import NavItem from "./NavItem.js";
import Profile from "./Profile.js";
import NavMenuHeader from "./NavMenuHeader.js";
import Button from "./Button.js";
import { IoIosArrowForward } from "react-icons/io";

function NavMenu() {
  return (
    <aside className="bg-[#181823] pt-5 py-10 h-screen max-w-[288px] w-full flex flex-col justify-between  shadow-md shadow-[#CAFF00] border-r-2 border-[#25232C]">
      <nav>
        <NavMenuHeader />
        <hr className="mb-5 border-2 border-[#25232C]" />
        <NavItem />
      </nav>
      <div className="relative bottom-30 flex justify-end w-full left-5">
        <Button className="w-8 h-8 flex justify-center items-center">
          <IoIosArrowForward className="text-2xl" />
        </Button>
      </div>
      <div className="px-2">
        <Profile />
      </div>
    </aside>
  );
}

export default NavMenu;
