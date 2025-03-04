import Container from "./Container.js";
import { IoStarSharp } from "react-icons/io5";

function Testimonials() {
  return (
    <div className="flex gap-[24px] justify-center items-baseline p-12 flex-wrap">
      <Container className="h-[200px] max-md:h-full max-w-[400px]">
        <p className=" p-2 rounded-md flex gap-4 text-2xl items-center justify-center text-[#CAFF00]">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </p>
        <h3>I Love Gencraft!</h3>
        <p className="text-gray-400 text-sm">
          I recently discovered your brand and was immediately drawn to it.
        </p>
      </Container>
      <Container className="h-[200px] max-w-[400px] max-md:h-full">
        <p className=" p-2 rounded-md flex gap-4 text-2xl items-center justify-center text-[#CAFF00]">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </p>
        <h3>The Perfect App!</h3>
        <p className="text-gray-400 text-sm">
          Any user can do and create anything on this app. And it keeps getting
          better!
        </p>
      </Container>
      <Container className="h-[200px] max-w-[400px] max-md:h-full">
        <p className=" p-2 rounded-md flex gap-4 text-2xl items-center justify-center text-[#CAFF00]">
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
          <IoStarSharp />
        </p>
        <h3>Gencraft is absolutely fantastic!</h3>
        <p className="text-gray-400 text-sm">
          It&apos;s incredibly intuitive to use and generates unique characters
          with remarkable detail.
        </p>
      </Container>
    </div>
  );
}

export default Testimonials;
