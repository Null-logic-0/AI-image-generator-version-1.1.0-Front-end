import Image from "next/image";
import image1 from "../../../public/hero-images/image-2.png";
import image2 from "../../../public/hero-images/image-3.png";
import image3 from "../../../public/hero-images/image-4.png";
import image4 from "../../../public/hero-images/image-5.png";
import image5 from "../../../public/hero-images/image-6.png";
import image6 from "../../../public/hero-images/image-7.png";
import image7 from "../../../public/hero-images/image-8.png";
import image8 from "../../../public/hero-images/image-9.png";

function ImagesGrid() {
  return (
    <div className="flex justify-center items-center px-12 gap-[24px] flex-wrap max-w-[1500px]">
      <Image src={image8} alt="image" quality={80} />
      <Image src={image1} alt="image" quality={80} />
      <Image src={image7} alt="image" quality={80} />
      <Image src={image6} alt="image" quality={80} />
      <Image src={image3} alt="image" quality={80} />
      <Image src={image2} alt="image" quality={80} />
      <Image src={image4} alt="image" quality={80} />
      <Image src={image5} alt="image" quality={80} />
    </div>
  );
}

export default ImagesGrid;
