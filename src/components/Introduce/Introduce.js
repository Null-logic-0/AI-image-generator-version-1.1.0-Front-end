"use client";
import { motion } from "framer-motion";
import { FaPenToSquare } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "../Container.js";

// Animation Variant
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animated Container Component
function AnimatedContainer({ icon, title, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInRight}
    >
      <Container className="max-md:h-full h-[200px] max-w-[400px] py-2">
        <p className="border-2 w-10 border-[#20221C] p-2 rounded-md flex items-center justify-center text-[#CAFF00]">
          {icon}
        </p>
        <h3>{title}</h3>
        <p className="text-gray-400 text-sm">{text}</p>
      </Container>
    </motion.div>
  );
}

function Introduce() {
  return (
    <div className="flex justify-center items-center px-12 gap-[24px] flex-wrap">
      <AnimatedContainer
        icon={<FaPenToSquare />}
        title="Enter your prompt"
        text="Simply input your creative prompt or description, guiding the AI to generate an image that matches your vision."
      />
      <AnimatedContainer
        icon={<FaRegImages />}
        title="AI Generates image"
        text="Our powerful AI algorithms process your prompt, interpreting it to craft a unique and personalized image response."
      />
      <AnimatedContainer
        icon={<FaMagic />}
        title="Review and refine"
        text="Explore the generated image and fine-tune it using our intuitive editing tools, adjust colors, composition, and more to perfect your creation."
      />
    </div>
  );
}

export default Introduce;
