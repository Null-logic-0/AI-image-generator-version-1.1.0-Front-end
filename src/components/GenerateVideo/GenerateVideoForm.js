import { WiStars } from "react-icons/wi";
import Input from "../Input.js";
import Button from "../Button.js";

function GenerateVideoForm({ action, disable }) {
  return (
    <form
      action={action}
      className="bg-[#0D0D16] rounded-3xl border-2 border-[#20221C]  w-full p-4"
    >
      <div className="relative w-full">
        <Input
          name="prompt"
          isTextarea
          className="bg-[#060610] shadow-sm shadow-[#CAFF00] 
          border-2 border-[#25232C] w-full rounded-full resize-none pl-4 py-4 h-14
          focus:border-[#CAFF00] focus:outline-none transform transition-all"
          placeholder="Ask Anything..."
        />
        <div className="flex absolute items-center gap-4 top-[28px] right-[5px] transform -translate-y-1/2">
          <select name="resolution" defaultValue="480p">
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
          <Button
            disabled={disable}
            className=" w-10 h-10 flex items-center justify-center"
          >
            <WiStars className="text-3xl" />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default GenerateVideoForm;
