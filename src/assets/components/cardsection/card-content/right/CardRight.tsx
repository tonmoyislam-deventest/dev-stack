const CardRight = () => {
  return (
    // Card Right
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 self-start">

      {/* Header */}
      <h3 className="text-[20px] font-semibold text-[#1e293b]">
        Your Stack
      </h3>

      {/* Description */}
      <p className="mt-2 text-[14px] leading-5.5 text-[#94a3b8]">
        No technologies selected yet.
      </p>

      {/* Empty Stack */}
      <div className="mt-5 flex min-h-25 items-center justify-center rounded-2xl border border-dashed border-[#dbe4ee]">
        <p className="text-base text-[#94a3b8]">
          Your stack is empty.
        </p>
      </div>

    </div>
  );
};

export default CardRight;