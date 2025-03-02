import Image from "next/image";
import defaultImg from "../../public/default.jpg";
import Link from "next/link.js";
import { FaChevronRight } from "react-icons/fa6";
import { getUser } from "@/lib/data-services.js";

async function Profile() {
  const { user } = await getUser();
  return (
    <Link
      href="/account"
      className="border-2 border-[#25232C] rounded-full px-4 py-2 flex items-center justify-between"
    >
      <div className="flex gap-2 items-center">
        <Image
          src={user?.photo || defaultImg}
          alt={user.name || "User"}
          width={50}
          height={50}
          quality={80}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />
        <p className="flex flex-col">
          <span className="text-white font-semibold text-md">
            {user.name || "Guest"}
          </span>
          <span className="text-sm text-gray-400">
            {user.email || "not logged in"}
          </span>
        </p>
      </div>
      <FaChevronRight className="text-xl text-[#CAFF00]" />
    </Link>
  );
}

export default Profile;
