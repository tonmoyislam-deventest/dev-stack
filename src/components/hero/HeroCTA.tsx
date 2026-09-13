const HeroCTA = () => {
  return (
    <div className="mt-7 flex items-center gap-4">
      <button className="rounded-md bg-linear-to-r from-[#ff6b35] to-[#e11d8d] px-5 py-3 text-sm font-semibold text-white cursor-pointer active:scale-95">
        Explore Technologies
      </button>

      <button className="w-42 rounded-md border border-[#e5e7eb] bg-white py-2.5 text-[14px] font-medium text-[#475569] cursor-pointer active:scale-95">
        Learn More →
      </button>
    </div>
  );
};

export default HeroCTA;