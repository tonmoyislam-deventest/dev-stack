import HeroImage from "../../assets/banner-stack.png"
const HeroImg = () => {
  return (
    // Hero Image
    <div className="justify-self-end">
      <img
        src={HeroImage}
        alt="Development Stack"
        className="h-auto w-auto"
      />
    </div>
  );
};

export default HeroImg;