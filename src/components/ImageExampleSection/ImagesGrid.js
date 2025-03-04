"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import image1 from "../../../public/hero-images/image-2.png";
import image2 from "../../../public/hero-images/image-3.png";
import image3 from "../../../public/hero-images/image-4.png";
import image4 from "../../../public/hero-images/image-5.png";
import image5 from "../../../public/hero-images/image-6.png";
import image6 from "../../../public/hero-images/image-7.png";
import image7 from "../../../public/hero-images/image-8.png";
import image8 from "../../../public/hero-images/image-9.png";

const images = [image8, image1, image7, image6, image3, image2, image4, image5];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedImage({ src, alt }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <Image src={src} alt={alt} quality={80} />
    </motion.div>
  );
}

function ImagesGrid() {
  return (
    <motion.div className="flex justify-center items-center px-12 gap-6 flex-wrap max-w-[1500px]">
      {images.map((img, index) => (
        <AnimatedImage key={index} src={img} alt={`image-${index}`} />
      ))}
    </motion.div>
  );
}

export default ImagesGrid;
