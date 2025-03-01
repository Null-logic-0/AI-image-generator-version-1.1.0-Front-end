import { FaPenToSquare } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import Container from "../Container.js";

function Introduce() {
  return (
    <div className="flex justify-center items-center px-12 gap-[24px] flex-wrap">
      <Container className="h-[200px] max-w-[400px]">
        <p className="border-2 w-10 border-[#20221C] p-2 rounded-md flex items-center justify-center text-[#CAFF00]">
          <FaPenToSquare />
        </p>
        <h3>Enter your prompt</h3>
        <p className="text-gray-400 text-sm">
          Simply input your creative prompt or description, guiding the AI to
          generate an image that matches your vision,
        </p>
      </Container>
      <Container className="h-[200px] max-w-[400px]">
        <p className="border-2 w-10 border-[#20221C] p-2 rounded-md flex items-center justify-center text-[#CAFF00]">
          <FaRegImages />
        </p>
        <h3>AI Generates image</h3>
        <p className="text-gray-400 text-sm">
          Our powerful Ai algorithms process your prompt, interpreting it to
          craft a unique and personalized image presonse.
        </p>
      </Container>
      <Container className="h-[200px] max-w-[400px]">
        <p className="border-2 w-10 border-[#20221C] p-2 rounded-md flex items-center justify-center text-[#CAFF00]">
          <FaMagic />
        </p>
        <h3>Review and refine</h3>
        <p className="text-gray-400 text-sm">
          Explore the generated image and fine-tune it using our intuitive
          editing tools, adjust colors, composition, and more to perfect your
          creation.
        </p>
      </Container>
    </div>
  );
}

export default Introduce;
