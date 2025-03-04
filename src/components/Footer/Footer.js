import FooterNav from "./FooterNav";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col  items-center gap-8 px-12 py-8 bg-[#060610] border-t border-[#CAFF00] mt-[171px]">
      <div className="flex  gap-5 justify-evenly items-start w-full flex-wrap">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col max-lg:items-center">
            <Link
              className="text-[#CAFF00] font-bold text-3xl max-md:hidden"
              href={"/"}
            >
              SynthArt
            </Link>
            <span className="font-bold text-xl max-md:hidden ">
              Make your dream <br />
              come true
            </span>
          </div>
        </div>
        <FooterNav />
      </div>
      <hr className="border-[#20221C] border w-full" />
      <span className="text-sm text-gray-400 font-medium text-center">
        © 2025 SynthArt | All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
