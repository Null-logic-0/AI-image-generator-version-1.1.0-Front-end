"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function GeneratedImage({ image, alt, className }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "generated-image.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div
      className={twMerge(
        "group relative cursor-pointer hover:border-2 hover:border-[#CAFF00] rounded-2xl px-4",
        className
      )}
    >
      <Image
        src={image}
        alt={alt}
        width={10}
        height={10}
        className="group-hover:blur-md object-contain rounded-2xl max-w-[500px] w-full"
        quality={100}
      />

      <button
        onClick={handleDownload}
        className="absolute shadow-xl top-2 right-2 opacity-0 
        cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaDownload className="text-[#CAFF00] text-xl" />
      </button>
    </div>
  );
}

export default GeneratedImage;
