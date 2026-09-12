const FooterBottom = () => {
  return (
    <div className="mx-auto flex w-full justify-between border-t border-[#f1f2f5d6] px-10 py-5">
      <p className="text-[11px] text-[#94a3b8]">
        © 2026 Dev Stack. All rights reserved.
      </p>

      <div className="flex gap-6">
        <a
          href="/privacy"
          className="text-[11px] text-[#94a3b8]  hover:text-blue-600 hover:underline"
        >
          Privacy
        </a>

        <a
          href="/terms"
          className="text-[11px] text-[#94a3b8]  hover:text-blue-600 hover:underline"
        >
          Terms
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;