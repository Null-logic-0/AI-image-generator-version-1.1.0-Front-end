import UserImage from "@/components/Gallery/UserImage.js";
import Image from "next/image";
import emptyImg from "../../../../public/empty.png";
import { getUserImages } from "@/lib/data-services.js";

async function GalleryPage() {
  const { success, data, message } = await getUserImages();

  if (!success) {
    return (
      <div className="flex flex-col items-center gap-2 justify-center mx-auto">
        <span className="text-center text-xl text-gray-400">{message}</span>
      </div>
    );
  }
  if (!success) {
    return (
      <div className="flex flex-col items-center gap-2 justify-center">
        <span className="text-center text-xl text-gray-400">{message}</span>
      </div>
    );
  }
  return (
    <div className="mx-auto w-full flex flex-col gap-12 px-4">
      <h1 className="text-center font-bold text-white text-xl">Gallery</h1>
      <ul className="flex justify-center items-center ">
        <li className="flex gap-4 items-center flex-wrap justify-center">
          {data.length > 0 ? (
            data.map((image) => (
              <UserImage key={image._id} src={image.imageData} id={image._id} />
            ))
          ) : (
            <div className="flex flex-col items-center gap-2 justify-center">
              <Image src={emptyImg} alt="icon" width={80} height={80} />
              <span className="text-center text-xl text-gray-400">
                No images
              </span>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default GalleryPage;
