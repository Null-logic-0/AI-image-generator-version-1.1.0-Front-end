import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function AuthCTA({ href, title, cta }) {
  return (
    <p className="text-sm flex gap-2 items-center justify-center max-sm:flex-col">
      <span className=" text-gray-400">{title}</span>
      <Link href={href} className="text-[#CAFF00] flex items-center gap-2">
        {cta}
        <FaArrowRightLong />
      </Link>
    </p>
  );
}

export default AuthCTA;
