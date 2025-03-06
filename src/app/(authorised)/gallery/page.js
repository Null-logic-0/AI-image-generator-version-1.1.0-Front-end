import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import ImageGallery from "@/components/Gallery/ImageGallery";

async function GalleryPage() {
  return (
    <div className="mx-auto w-full flex flex-col gap-12 px-4 pb-8 max-w-[1000px]">
      <h1 className="text-center font-bold text-white text-2xl">Gallery</h1>
      <Suspense fallback={<Spinner />}>
        <ImageGallery />
      </Suspense>
    </div>
  );
}

export default GalleryPage;
