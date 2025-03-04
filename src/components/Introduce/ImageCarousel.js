"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import example1 from "../../../public/example1.png";
import example2 from "../../../public/example2.png";
import example3 from "../../../public/example3.png";

const images = [example1, example2, example3];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[400px] max-h-[250px] flex items-center max-md:w-full justify-center overflow-hidden mx-auto">
      <div className="absolute inset-0 flex justify-center items-center max-md:hidden">
        {images.map((img, index) => {
          const isPrevious =
            index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;
          const isCurrent = index === currentIndex;

          return (
            <Image
              key={index}
              src={img}
              alt={`image${index + 1}`}
              className={`absolute max-w-[300px]  w-full h-full max-h-[200px] object-contain transition-all duration-1000 ease-in-out 
                ${
                  isPrevious
                    ? "opacity-80 scale-75 -translate-x-[120px] blur-md"
                    : ""
                }
                ${
                  isNext
                    ? "opacity-80 scale-75 translate-x-[120px] blur-md"
                    : ""
                }
                ${isCurrent ? "opacity-100 scale-100 z-10" : "opacity-0"}
              `}
            />
          );
        })}
      </div>

      <Image
        src={images[currentIndex]}
        alt={`image${currentIndex + 1}`}
        className="relative z-20 transition-all  duration-1000 ease-in-out scale-105 max-w-[300px] w-full h-full max-h-[200px] object-contain"
      />
    </div>
  );
}

export default ImageCarousel;
