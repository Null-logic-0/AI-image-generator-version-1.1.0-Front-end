"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

function GeneratedImage({ image, alt, className, aspectRatio }) {
  const handleDownload = (src, fileName = "image.png") => {
    const a = document.createElement("a");
    a.href = src;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className={twMerge(
        "group relative cursor-pointer hover:border-2 hover:border-[#CAFF00] rounded-2xl px-4  ",
        className
      )}
    >
      <Image
        width={600}
        height={600}
        src={image}
        alt={alt || "Generated Image"}
        className="group-hover:blur-md object-contain rounded-lg"
        quality={100}
      />

      <button
        onClick={() => handleDownload(image)}
        className="absolute shadow-xl top-2 right-2 opacity-0 
        cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaDownload className="text-[#CAFF00] text-xl" />
      </button>
    </div>
  );
}

export default GeneratedImage;
