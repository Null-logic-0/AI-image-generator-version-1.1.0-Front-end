import Button from "../Button.js";
import { WiStars } from "react-icons/wi";
import Input from "../Input.js";

function HeroInputForm() {
  return (
    <form className="flex items-center justify-center">
      <div className="relative max-w-[1200px] w-full">
        <Input
          isTextarea
          className="bg-[#060610] shadow-sm shadow-[#CAFF00] 
          border-2 border-[#25232C] w-full rounded-full resize-none pl-4 py-4 h-14
          focus:border-[#CAFF00] focus:outline-none transform transition-all"
          placeholder="Generate..."
        />
        <Button className="absolute w-10 h-10 top-[28px] right-[5px] transform -translate-y-1/2 flex items-center justify-center">
          <WiStars className="text-3xl" />
        </Button>
      </div>
    </form>
  );
}

export default HeroInputForm;
