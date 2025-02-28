import HeroInputForm from "./HeroInputForm.js";

function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col gap-8 justify-center items-center px-12">
      <div className="text-center">
        <h1 className="font-bold text-white text-[1.875rem] leading-[2.5rem] pb-4">
          Create anything as you <span className="text-[#CAFF00]">wish</span>
        </h1>
        <p className="text-gray-400">
          AI Art Image and Video Generator
          <br /> What will you create?
        </p>
      </div>
      <div className="w-full">
        <HeroInputForm />
      </div>
    </section>
  );
}

export default Hero;
