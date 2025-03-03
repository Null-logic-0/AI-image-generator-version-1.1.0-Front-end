"use client";
import { useSideBarContext } from "@/app/store/SideBar-context.js";
import { FaSlidersH } from "react-icons/fa";

function NavMenuButton() {
  const { handleToggleSideBar } = useSideBarContext();
  return (
    <button className="cursor-pointer" onClick={handleToggleSideBar}>
      <FaSlidersH className="text-xl" />
    </button>
  );
}

export default NavMenuButton;
