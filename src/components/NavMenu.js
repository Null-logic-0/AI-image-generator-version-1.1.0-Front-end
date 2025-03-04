"use client";
import NavItem from "./NavItem.js";
import NavMenuHeader from "./NavMenuHeader.js";
import { useUIContext } from "@/app/store/ui-context.js";

function NavMenu({ children }) {
  const { toggleSideBar, handleToggleSideBar } = useUIContext();

  return (
    <>
      {toggleSideBar && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-10 sm:hidden lg:hidden"
          onClick={handleToggleSideBar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bg-[#181823] z-20 pt-5 py-10 h-full max-w-[288px] w-full flex flex-col justify-between  
        shadow-md shadow-[#CAFF00] border-r-2 border-[#25232C] transition-transform duration-300  ${
          toggleSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <NavMenuHeader />
          <hr className="mb-5 border-2 border-[#25232C]" />
          <NavItem />
        </nav>
        <div className="px-2">{children}</div>
      </aside>
    </>
  );
}

export default NavMenu;
