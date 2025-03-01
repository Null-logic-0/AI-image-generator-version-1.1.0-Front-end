"use client";

import { BsStars } from "react-icons/bs";
import { RiImageAiLine } from "react-icons/ri";
import { IoImagesOutline } from "react-icons/io5";
import { RiVideoAddFill } from "react-icons/ri";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const links = [
  {
    key: "generate image",
    title: "Generate image",
    icon: <BsStars />,
    href: "/generate-image",
  },
  {
    key: "backgorund remover",
    title: "Backgorund remover",
    icon: <RiImageAiLine />,
    href: "#",
    isDisabled: true,
    note: "soon",
    message: true,
  },
  {
    key: "generate video",
    title: "Generate video",
    icon: <RiVideoAddFill />,
    href: "#",
    isDisabled: true,
    note: "soon",
    message: true,
  },
  {
    key: "gallery",
    title: "Gallery",
    icon: <IoImagesOutline />,
    href: "#",
    isDisabled: true,
    note: "soon",
    message: true,
  },
];

function NavItem() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col  justify-center  gap-4 py-[12px]">
      {links.map((item) => {
        const isActive = pathname === item.href && !item.isDisabled;

        return (
          <li
            key={item.key}
            className="flex justify-between items-center px-[16px]"
            style={{
              background: isActive
                ? "linear-gradient(90deg, rgba(199, 236, 58, 0.20) 0%, rgba(199, 236, 58, 0.00) 100%)"
                : "transparent",
              borderLeft: isActive ? "2px solid  #CAFF00" : "none",
            }}
          >
            <Link href={item.href} passHref>
              <div
                className={`flex gap-2 font-medium  py-2 transition-colors duration-300  ${
                  isActive
                    ? "text-[#CAFF00]"
                    : `${
                        item.isDisabled
                          ? "text-gray-400 font-regular cursor-not-allowed"
                          : "text-[#B5B7BF]"
                      }`
                }`}
                style={{ cursor: item.isDisabled ? "not-allowed" : "pointer" }}
              >
                {item.icon}
                {item.title}
              </div>
            </Link>

            {item.message && (
              <span className="bg-gray-600 px-2 py-2 flex justify-center items-center rounded-2xl w-[45px] h-[24px] leading-4 font-bold text-[12px]">
                {item.note}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default NavItem;
