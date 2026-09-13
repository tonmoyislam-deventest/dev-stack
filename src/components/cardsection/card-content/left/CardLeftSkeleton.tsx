const CardLeftSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="h-70.5 animate-pulse rounded-2xl border border-[#e5e7eb] bg-white p-5"
        >
          {/* Icon */}
          <div className="h-10 w-10 rounded-lg bg-gray-200" />

          {/* Badge */}
          <div className="mt-4 h-5 w-16 rounded-full bg-gray-200" />

          {/* Title */}
          <div className="mt-4 h-5 w-32 rounded bg-gray-200" />

          {/* Description */}
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full rounded bg-gray-200" />
            <div className="h-3 w-4/5 rounded bg-gray-200" />
          </div>

          {/* Category */}
          <div className="mt-4 h-3 w-20 rounded bg-gray-200" />

          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="h-8 w-24 rounded-lg bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLeftSkeleton;