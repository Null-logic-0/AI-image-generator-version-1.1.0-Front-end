import Image from "next/image";
import Link from "next/link.js";
import { FaChevronRight } from "react-icons/fa6";
import { getUser } from "@/lib/data-services.js";

async function Profile() {
  const { user } = await getUser();
  const imageSrc = user?.photo?.startsWith("http" || "https")
    ? user.photo
    : `/${user?.photo || "default.jpg"}`;
  return (
    <Link
      href="/account"
      className="border-2 border-[#25232C] rounded-full px-4 py-2 flex items-center justify-between"
    >
      <div className="flex gap-2 items-center">
        <Image
          src={imageSrc}
          alt={user?.name || "User"}
          width={50}
          height={50}
          quality={80}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />
        <p className="flex flex-col">
          <span className="text-white font-semibold text-[14px]">
            {user?.name || "Guest"}
          </span>
          <span className="text-[12px] text-gray-400">
            {user?.email || "not logged in"}
          </span>
        </p>
      </div>
      <FaChevronRight className="text-xl text-[#CAFF00]" />
    </Link>
  );
}

export default Profile;
