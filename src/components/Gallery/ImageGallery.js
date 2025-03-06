import { getUserImages } from "@/lib/data-services.js";

import Image from "next/image";
import UserImage from "./UserImage";
import emptyImg from "../../../public/empty.png";

async function ImageGallery() {
  const { success, images, message } = await getUserImages();

  if (!success) {
    return (
      <div className="flex flex-col items-center gap-2 justify-center mx-auto">
        <span className="text-center text-xl text-gray-300">{message}</span>
      </div>
    );
  }
  return (
    <ul className="flex justify-center items-center ">
      <li className="flex gap-4 items-center flex-wrap justify-center">
        {images.map((image) => (
          <UserImage key={image._id} src={image.imageData} id={image._id} />
        ))}
        {images.length === 0 && (
          <div className="flex flex-col items-center gap-2 justify-center">
            <Image src={emptyImg} alt="icon" width={80} height={80} />
            <span className="text-center text-xl text-gray-400">No images</span>
          </div>
        )}
      </li>
    </ul>
  );
}

export default ImageGallery;
