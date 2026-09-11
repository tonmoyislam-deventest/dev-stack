import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Technologies", href: "technologies" },
    { name: "Projects", href: "projects" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href="home"
          className={`text-sm font-medium transition-colors ${
            activeLink === link.name
              ? "text-[#db2777]"
              : "text-[#475569] hover:text-[#db2777]"
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;






