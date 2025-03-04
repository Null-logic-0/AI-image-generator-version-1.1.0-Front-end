"use client";
import NavItem from "./NavItem.js";
import NavMenuHeader from "./NavMenuHeader.js";
import { useUIContext } from "@/app/store/ui-context.js";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "0%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7, transition: { duration: 0.3 } },
};

function NavMenu({ children }) {
  const { toggleSideBar, handleToggleSideBar } = useUIContext();

  return (
    <AnimatePresence>
      {toggleSideBar && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-10  2xl:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleToggleSideBar}
          />

          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 bg-[#181823] z-20 pt-5 py-10 h-full max-w-[288px] w-full flex flex-col justify-between  
            shadow-md shadow-[#CAFF00] border-r-2 border-[#25232C] px-2"
          >
            <nav>
              <NavMenuHeader />
              <hr className="mb-5 border-2 border-[#25232C]" />
              <NavItem />
            </nav>
            <div>{children}</div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default NavMenu;
