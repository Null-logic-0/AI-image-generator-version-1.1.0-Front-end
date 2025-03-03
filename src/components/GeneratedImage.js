"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function GeneratedImage({ image, alt ,className}) {
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
    <div className={twMerge("group relative w-full max-w-[500px]  cursor-pointer hover:border-2 hover:border-[#CAFF00] rounded-2xl",className)}>
      <div className="flex-1 relative w-[500px] h-[500px]">
        <Image
          src={image}
          alt={alt}
          className="group-hover:blur-md object-contain rounded-2xl"
          fill
          quality={100}
          sizes="(max-width: 640px) 100vw, 500px"
        />
      </div>

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
