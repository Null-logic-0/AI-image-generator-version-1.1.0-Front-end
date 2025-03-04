"use client";

import { useUIContext } from "@/app/store/ui-context.js";
import { RiCloseCircleLine } from "react-icons/ri";

function Modal({ children }) {
  const { openModal, handleToggleModal } = useUIContext();

  return (
    <>
      {openModal && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-70 z-10"
            onClick={handleToggleModal}
          />
          <dialog
            role="dialog"
            aria-modal="true"
            open
            className="fixed mx-auto   bg-[#181823] z-50 max-w-[500px] w-full flex flex-col
        shadow-md shadow-[#CAFF00] border-2 border-[#25232C]"
          >
            <button
              onClick={handleToggleModal}
              className="flex justify-end items-start p-2 text-2xl text-[#CAFF00] cursor-pointer"
            >
              <RiCloseCircleLine />
            </button>
            <div className="p-4 flex flex-col gap-6">{children}</div>
          </dialog>
        </>
      )}
    </>
  );
}

export default Modal;
