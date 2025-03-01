import Image from "next/image";
import example from "../../public/example1.png";
import { FaDownload } from "react-icons/fa";

function GeneratedImage() {
  return (
    <div className="group relative cursor-pointer hover:border-2 hover:border-[#CAFF00] rounded-2xl ">
      <Image
        src={example}
        alt="image"
        className="group-hover:blur-md object-fill"
      />

      <button className="absolute  shadow-xl top-2 right-2 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
        <FaDownload className="text-[#CAFF00] text-xl" />
      </button>
    </div>
  );
}

export default GeneratedImage;
