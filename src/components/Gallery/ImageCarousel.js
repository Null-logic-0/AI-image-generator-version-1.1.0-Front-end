"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdClose } from "react-icons/md";

function ImageCarousel({ images, initialIndex }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  let touchStartX = 0;
  let touchEndX = 0;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      goToNextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      goToPreviousSlide();
    }
  };

  useEffect(() => {
    const currentImageId = images[currentIndex]?._id;

    if (router.asPath) {
      const currentPath = router.asPath.split("/").pop();

      if (currentImageId && currentPath !== currentImageId.toString()) {
        router.replace(`/gallery/${currentImageId}`);
      }
    }
  }, [currentIndex, router, images]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-50 group cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0" />

      <div className="flex flex-col items-center z-10 relative min-h-screen min-w-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          {images[currentIndex]?.imageData ? (
            <Image
              src={images[currentIndex]?.imageData}
              alt="Generated"
              className="object-contain w-full h-full"
              fill
            />
          ) : (
            <div className="text-center p-4">Image not available</div>
          )}
        </div>

        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/2 left-4 opacity-0 group-hover:opacity-100 max-sm:opacity-100 transform -translate-y-1/2 text-white p-4 rounded-full z-10 cursor-pointer"
        >
          <GrPrevious className="text-3xl" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0  max-sm:opacity-100 group-hover:opacity-100 text-white p-4 rounded-full z-10 cursor-pointer"
        >
          <GrNext className="text-3xl" />
        </button>

        <button
          onClick={() => router.push("/image-gallery")}
          className="absolute top-4 right-4 max-sm:right-0 text-white p-2  max-sm:opacity-100 rounded z-20 cursor-pointer opacity-0 group-hover:opacity-100"
        >
          <MdClose className="text-3xl max-sm:text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
