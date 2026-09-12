const footerLinks = [
    {
        title: "PRODUCT",
        links: [
            { name: "Home", path: "/" },
            { name: "Technologies", path: "/technologies" },
            { name: "Projects", path: "/projects" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Careers", path: "/careers" },
        ],
    },
    {
        title: "LEGAL",
        links: [
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms of Service", path: "/terms" },
        ],
    },
];

const FooterRight = () => {
    return (
        <div className="flex justify-between w-full">
            {footerLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-3">
                    <h3 className="text-[14px] font-medium text-[#1e293b]">
                        {section.title}
                    </h3>

                    <div className="flex flex-col gap-2">
                        {section.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-[12px] text-[#64748b] hover:text-blue-600 hover:underline"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterRight;