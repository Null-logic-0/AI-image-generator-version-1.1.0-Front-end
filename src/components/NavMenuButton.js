"use client";
import { useUIContext } from "@/app/store/ui-context.js";
import { FaSlidersH } from "react-icons/fa";

function NavMenuButton() {
  const { handleToggleSideBar } = useUIContext();
  return (
    <button className="cursor-pointer" onClick={handleToggleSideBar}>
      <FaSlidersH className="text-xl" />
    </button>
  );
}

export default NavMenuButton;
