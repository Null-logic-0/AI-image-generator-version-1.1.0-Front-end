"use client";

import { useUIContext } from "@/app/store/ui-context.js";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: "-50%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: "-50%",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: "-50%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

function Modal({ children }) {
  const { openModal, handleToggleModal } = useUIContext();

  return (
    <AnimatePresence>
      {openModal && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-10"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleToggleModal}
          />

          {/* Modal with animation */}
          <motion.dialog
            role="dialog"
            aria-modal="true"
            open
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#181823] z-50 max-w-[500px] w-full flex flex-col
            shadow-md shadow-[#CAFF00] border-2 border-[#25232C] p-4 rounded-md"
          >
            <button
              onClick={handleToggleModal}
              className="flex justify-end items-start p-2 text-2xl text-[#CAFF00] cursor-pointer"
            >
              <RiCloseCircleLine />
            </button>

            <div className="p-4 flex flex-col gap-6">{children}</div>
          </motion.dialog>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
