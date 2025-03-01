import Container from "./Container.js";
import { IoStarSharp } from "react-icons/io5";

function Testimonials() {
  return (
    <div className="flex gap-[24px] justify-center items-baseline p-12 flex-wrap">
      <Container
        className="border-none flex gap-4 items-center text-2xl"
        icon={
          <>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </>
        }
        title="I Love Gencraft!"
        text="I recently discovered your brand and was immediately drawn to it."
      />
      <Container
        className="border-none flex gap-4 items-center text-2xl"
        icon={
          <>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </>
        }
        title="The Perfect App!"
        text="Any user can do and create anything on this app. And it keeps getting better!"
      />
      <Container
        className="border-none flex gap-4 items-center text-2xl"
        icon={
          <>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </>
        }
        title="Gencraft is absolutely fantastic!"
        text="It's incredibly intuitive to use and generates unique characters with remarkable detail."
      />
    </div>
  );
}

export default Testimonials;
