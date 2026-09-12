import Logo from "../navbar/Logo";
const FooterLeft = () => {
    return (
        <div className="w-[35%]">
            <h2 className="text-[18px] font-bold text-[#1e293b]">
                <Logo/>
            </h2>

            <div className="mt-4 min-w-95 text-[12px] leading-5 text-[#64748b]">
                <p >
                    Curated tools, technologies, and resources for developers building </p>
                <p>modern software.</p>

            </div>

            <div className="mt-5 flex gap-5">
                <a
                    href="#"
                    className="text-[12px] font-medium text-[#475569]"
                >
                    GitHub
                </a>

                <a
                    href="#"
                    className="text-[12px] font-medium text-[#475569]"
                >
                    Twitter
                </a>

                <a
                    href="#"
                    className="text-[12px] font-medium text-[#475569]"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default FooterLeft;