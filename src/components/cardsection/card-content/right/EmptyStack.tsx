const EmptyStack = () => {
  return (
    <>
      <h3 className="text-[20px] font-semibold text-[#1e293b]">Your Stack</h3>

      <p className="mt-2 text-[14px] leading-5.5 text-[#94a3b8]">
        No technologies selected yet.
      </p>

      <div className="mt-5 flex min-h-25 items-center justify-center rounded-2xl border border-dashed border-[#dbe4ee]">
        <p className="text-base text-[#94a3b8]">Your stack is empty.</p>
      </div>
    </>
  );
};

export default EmptyStack;
