"use client";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../Dropdown";
import { deleteImage } from "@/lib/actions";

const options = ["Download", "Delete"];

function UserImage({ id, src }) {
  const handleDownload = (src, fileName = "image.png") => {
    const a = document.createElement("a");
    a.href = src;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDelete = async () => {
    try {
      await deleteImage(id);
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleSelect = (value) => {
    if (value === "Download") {
      handleDownload(src);
    }

    if (value === "Delete") {
      handleDelete(id);
    }
  };
  return (
    <div className="relative bg-[#25232C] rounded-lg border border-[#CAFF00]/50 p-4 py-8">
      <div className="absolute top-0">
        <Dropdown options={options} onSelect={handleSelect} />
      </div>
      <Link href={`/image-gallery/${id}`}>
        <Image
          src={src}
          alt={`user-image`}
          width={250}
          height={250}
          className="object-cover rounded-sm"
        />
      </Link>
    </div>
  );
}

export default UserImage;
