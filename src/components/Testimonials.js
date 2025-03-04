"use client";
import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "./Container.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedTestimonial({ title, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <Container className="h-[200px] max-w-[400px] max-md:h-full">
        <p className="p-2 rounded-md flex gap-4 text-2xl items-center justify-center text-[#CAFF00]">
          {[...Array(5)].map((_, i) => (
            <IoStarSharp key={i} />
          ))}
        </p>
        <h3>{title}</h3>
        <p className="text-gray-400 text-sm">{text}</p>
      </Container>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <div className="flex gap-[24px] justify-center items-baseline p-12 flex-wrap">
      <AnimatedTestimonial
        title="I Love Gencraft!"
        text="I recently discovered your brand and was immediately drawn to it."
      />
      <AnimatedTestimonial
        title="The Perfect App!"
        text="Any user can do and create anything on this app. And it keeps getting better!"
      />
      <AnimatedTestimonial
        title="Gencraft is absolutely fantastic!"
        text="It's incredibly intuitive to use and generates unique characters with remarkable detail."
      />
    </div>
  );
}

export default Testimonials;
