import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import InputContainer from "./InputContainer.js";
import Label from "./Label.js";
import { WiStars } from "react-icons/wi";
import Select from "./Select.js";

function GenerateImageForm() {
  return (
    <Container className="shadow-none rounded-3xl">
      <form className="flex  justify-center flex-col items-center gap-4">
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
            isTextarea
            className="bg-[#060610] shadow-sm shadow-[#CAFF00] 
          border-2 border-[#25232C] w-full rounded-full resize-none pl-4 py-4 h-14
          focus:border-[#CAFF00] focus:outline-none transform transition-all"
            placeholder="Ask Anything..."
          />
          <Button className="absolute w-40 top-[28px] right-[5px] transform -translate-y-1/2 flex items-center justify-center px-4 py-2">
            <WiStars className="text-3xl" />
            Generate
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default GenerateImageForm;
