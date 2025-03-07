import { WiStars } from "react-icons/wi";
import InputContainer from "../InputContainer.js";
import Input from "../Input.js";
import Label from "../Label.js";
import Select from "../Select.js";
import Button from "../Button.js";

function GenerateImageForm({ action, disable }) {
  return (
    <form
      className="flex  justify-center  items-start flex-col gap-4 bg-[#0D0D16] rounded-3xl border-2 border-[#20221C]  w-full p-4"
      action={action}
    >
      <div className="flex items-baseline gap-4">
        <InputContainer>
          <Label htmlFor="quality">Quality</Label>
          <Input
            type="number"
            id="quality"
            name="quality"
            min="1"
            max="100"
            step="1.0"
            defaultValue="80"
            className="w-[4rem] text-sm"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="aspectRatio">Ratio</Label>
          <Select id="aspectRatio" name="aspectRatio" defaultValue="1:1">
            <option value="1:1">1:1</option>
            <option value="16:9">16:9</option>
            <option value="4:3">4:3</option>
          </Select>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="format">Format</Label>
          <Select id="format" name="format" defaultValue="png">
            <option value="webp">WebP</option>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </Select>
        </InputContainer>
      </div>
      <div className="relative  w-full">
        <Input
          name="prompt"
          isTextarea
          className="bg-[#060610] shadow-sm shadow-[#CAFF00] 
          border-2 border-[#25232C] w-full rounded-full resize-none pl-4 py-4 h-14
          focus:border-[#CAFF00] focus:outline-none transform transition-all"
          placeholder="Ask Anything..."
        />
        <Button
          disabled={disable}
          className="absolute w-10 h-10 top-[28px] right-[5px] transform -translate-y-1/2 flex items-center justify-center"
        >
          <WiStars className="text-3xl" />
        </Button>
      </div>
    </form>
  );
}

export default GenerateImageForm;
