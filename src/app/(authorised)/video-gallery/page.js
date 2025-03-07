import VideoGallery from "@/components/Gallery/VideoGallery";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

function VideoGalleryPage() {
  return (
    <div className="mx-auto w-full flex flex-col gap-12 px-4 pb-4  max-w-[1500px]">
      <h1 className="text-center font-bold text-white text-2xl">
        Video Gallery
      </h1>
      <Suspense fallback={<Spinner />}>
        <VideoGallery />
      </Suspense>
    </div>
  );
}

export default VideoGalleryPage;
