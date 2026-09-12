import { use } from "react";
import type { CardLeftProps } from "../../../../../type/Type";

const Card = ({ promise }: CardLeftProps) => {
  const cardData = use(promise);

  return (
    // Card
    <div className="grid grid-cols-3 gap-5">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex h-70.5 w-[288px] flex-col rounded-2xl border border-[#e5e7eb] bg-white p-5"
        >
          <div className="flex items-start justify-between">

            {/* Icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f8fafc]">
              <img
                src={card.icon}
                alt={card.name}
              />
            </div>

            {/* Badge */}
            {card.badge ? (
              <span
                className="rounded-full border px-3 py-0.5 text-[14px] font-medium"
                style={{
                  color: card.color,
                  backgroundColor: `${card.color}25`,
                  border: `1px solid ${card.color}10`,
                }}
              >
                {card.badge}
              </span>
            ) : null}

          </div>

          <h3 className="mt-2 text-[20px] font-semibold text-[#1e293b]">
            {card.name}
          </h3>

          <p className="mt-2 text-[14px] leading-5.5 text-[#64748b]">
            {card.description}
          </p>

          <div className="mt-auto">

            <div className="mb-4 border-t border-[#f1f5f9]" />

            <div className="flex items-center justify-between">

              <span className="rounded bg-[#f1f5f9] px-2 py-1 text-[12px] text-[#64748b]">
                {card.category}
              </span>

              <span className="text-[12px] text-[#64748b]">
                {card.level}
              </span>

              <span className="text-[14px] text-[#64748b]">
                <span className="text-[#fbbf24]">★</span> {card.rating}
              </span>

            </div>

            <button className="mt-4 w-full cursor-pointer rounded-md bg-[#020817] py-2.5 text-[10px] font-medium text-white active:scale-90">
              Add to Stack
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;