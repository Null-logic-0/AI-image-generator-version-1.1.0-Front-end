import Header from "@/components/Header/Header.js";
import Hero from "@/components/Hero/Hero.js";
import ImagesGrid from "@/components/ImageExampleSection/ImagesGrid.js";
import ImageCarousel from "@/components/Introduce/ImageCarousel.js";
import Introduce from "@/components/Introduce/Introduce.js";
import PromptExample from "@/components/Introduce/PromptExample";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer/Footer";

function LandingPage() {
  return (
    <div className="landing-bg">
      <Header />
      <Hero />
      <section className="flex justify-center">
        <ImagesGrid />
      </section>
      <section className="mt-[171px]">
        <h2 className="font-bold text-white text-[1.875rem] leading-[2.5rem] pb-8 text-center px-4">
          How SynthArt works?
        </h2>
        <Introduce />
      </section>
      <section className="mt-[171px] flex justify-between gap-6 items-center max-xl:flex-col-reverse flex-wrap max-w-[1200px] mx-auto px-4">
        <div>
          <h2 className="font-bold text-white text-[1.875rem] leading-[2.5rem] pb-4 text-left max-xl:text-center">
            Text to image
          </h2>
          <p className="max-w-[544px] w-full text-gray-400 text-sm max-md:text-center">
            Imagine transforming your creative thoughts into breathtaking
            visuals with ease. Generato, our powerful AI engine, effortlessly
            translates your wildest ideas into stunning, high-quality images.
            Whether you’re envisioning a vibrant scene, intricate details, or
            abstract beauty, Generato bridges the gap between imagination and
            creation.
          </p>
        </div>
        <div className="flex flex-col items-center mx-auto gap-4 px-4">
          <div className="max-md:w-full max-md:max-w-[200px]">
            <ImageCarousel />
          </div>

          <PromptExample />
        </div>
      </section>
      <section className="mt-[171px] bg-testimonial pt-12">
        <h2 className="font-bold text-[#CAFF00] text-[1.875rem] leading-[2.5rem] pb-8 text-center">
          What our users are saying
        </h2>
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
