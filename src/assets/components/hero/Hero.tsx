import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    // Hero
    <section className="h-[calc(h-100vh-81px)] w-full">
      <div className="mx-auto grid container gap-10 grid-cols-2 items-center px-10 py-20">

        {/* Left Side */}
        <HeroContent/>        

        {/* Right Side */}
        <HeroImg />

      </div>
    </section>
  );
};

export default Hero;