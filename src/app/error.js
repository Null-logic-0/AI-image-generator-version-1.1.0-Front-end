"use client";
import Image from "next/image";

function error() {
  return (
    <div>
      <Image
        src="/erorr-img.jpg"
        alt="error-image"
        fill
        className="object-cover"
      />
      <span className="fixed z-50 text-black font-semibold text-xl bottom-5 w-full text-center">
        Ooops... <br />
        Something went wrong
      </span>
    </div>
  );
}

export default error;
