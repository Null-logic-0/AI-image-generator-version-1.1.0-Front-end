"use client";
import Video from "./Video";
import Image from "next/image";
import { deleteVideo } from "@/lib/actions.js";
import { MdDeleteForever } from "react-icons/md";
import emptyImg from "../../../public/empty.png";

function Videos({ videos }) {
  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <>
      {videos.map((video) => (
        <div key={video._id} className="relative group cursor-pointer">
          <button
            className="absolute top-0 p-2 text-xl group-hover:bg-black/50 rounded-full z-10 cursor-pointer"
            onClick={() => handleDelete(video._id)}
          >
            <MdDeleteForever />
          </button>
          <Video
            src={video.videoData}
            className="max-w-[300px] max-h-[300px] rounded-sm"
          />
        </div>
      ))}

      {videos.length === 0 && (
        <div className="flex flex-col items-center gap-2 justify-center">
          <Image src={emptyImg} alt="icon" width={80} height={80} />
          <span className="text-center text-xl text-gray-400">No videos</span>
        </div>
      )}
    </>
  );
}

export default Videos;
