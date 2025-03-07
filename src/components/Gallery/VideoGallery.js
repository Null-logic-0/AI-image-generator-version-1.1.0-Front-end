import { getUserVideos } from "@/lib/data-services";
import Videos from "../GenerateVideo/Videos";

async function VideoGallery() {
  const { success, videos, message } = await getUserVideos();

  if (!success) {
    return (
      <div className="flex flex-col items-center gap-2 justify-center mx-auto">
        <span className="text-center text-xl text-gray-400">{message}</span>
      </div>
    );
  }
  return (
    <ul>
      <li className="flex gap-4 items-center flex-wrap justify-center">
        <Videos videos={videos} />
      </li>
    </ul>
  );
}

export default VideoGallery;
