"use client";
import { useRouter } from "next/navigation.js";
import Button from "../Button.js";
import { WiStars } from "react-icons/wi";

function PromptExample() {
  const route = useRouter();

  function handleRoute() {
    route.push("/signup");
  }
  return (
    <div className="flex items-center justify-center">
      <div className="relative max-w-[1200px] w-full">
        <div
          className="bg-[#060610]  shadow-sm shadow-[#CAFF00] 
          border-2 border-[#25232C]  rounded-full  pl-4 py-4 h-14
          transform transition-all w-full max-w-[400px]"
        >
          <span className="text-gray-400  text-sm typing-effect block whitespace-nowrap overflow-hidden">
            Futuristic music player with neon accents.
          </span>
        </div>
        <Button
          onClick={handleRoute}
          className="absolute w-10 h-10 top-[28px] right-[5px] transform -translate-y-1/2 flex items-center justify-center "
        >
          <WiStars className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}

export default PromptExample;
