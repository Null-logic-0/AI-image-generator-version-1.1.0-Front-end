import { FaPenToSquare } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";

import { FaRegImages } from "react-icons/fa6";
import Container from "../Container.js";

function Introduce() {
  return (
    <div className="flex justify-center items-center px-12 gap-[24px] flex-wrap">
      <Container
        className="w-10"
        icon={<FaPenToSquare />}
        title="Enter your prompt"
        text="Simply input your creative prompt or description, guiding the AI to generate an image that matches your vision,"
      />
      <Container
        className="w-10"
        icon={<FaRegImages />}
        title="AI Generates image"
        text="Our powerful Ai algorithms process your prompt, interpreting it to craft a unique and personalized image presonse."
      />
      <Container
        className="w-10"
        icon={<FaMagic />}
        title="Review and refine"
        text="Explore the generated image and fine-tune it using our intuitive editing tools, adjust colors, composition, and more to perfect your creation."
      />
    </div>
  );
}

export default Introduce;
