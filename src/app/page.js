import Hero from "@/components/Hero/Hero.js";
import ImagesGrid from "@/components/ImageExampleSection/ImagesGrid.js";
import ImageCarousel from "@/components/Introduce/ImageCarousel.js";
import Introduce from "@/components/Introduce/Introduce.js";
import PromptExample from "@/components/Introduce/PromptExample";
import Testimonials from "@/components/Testimonials";

function LandingPage() {
  return (
    <div>
      <Hero />
      <section className="flex justify-center">
        <ImagesGrid />
      </section>
      <section className="mt-[171px]">
        <h2 className="font-bold text-white text-[1.875rem] leading-[2.5rem] pb-8 text-center">
          How SynthArt works?
        </h2>
        <Introduce />
      </section>
      <section className="mt-[171px] flex justify-between items-center flex-wrap max-w-[1200px] mx-auto px-12">
        <div>
          <h2 className="font-bold text-white text-[1.875rem] leading-[2.5rem] pb-4 text-left">
            Text to image
          </h2>
          <p className="max-w-[544px] w-full text-gray-400 text-sm">
            Imagine transforming your creative thoughts into breathtaking
            visuals with ease. Generato, our powerful AI engine, effortlessly
            translates your wildest ideas into stunning, high-quality images.
            Whether you’re envisioning a vibrant scene, intricate details, or
            abstract beauty, Generato bridges the gap between imagination and
            creation.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ImageCarousel />
          <div>
            <PromptExample />
          </div>
        </div>
      </section>
      <section className="mt-[171px] bg-testimonial pt-12">
        <h2 className="font-bold text-[#CAFF00] text-[1.875rem] leading-[2.5rem] pb-8 text-center">
          What our users are saying
        </h2>
        <Testimonials />
      </section>
    </div>
  );
}

export default LandingPage;
