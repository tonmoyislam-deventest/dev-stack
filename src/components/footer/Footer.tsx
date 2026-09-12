import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-30 border-[#f1f2f5d6] bg-white">
      <div className="container mx-auto flex justify-start gap-50 px-10 py-12">
        <FooterLeft />
        <FooterRight />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;