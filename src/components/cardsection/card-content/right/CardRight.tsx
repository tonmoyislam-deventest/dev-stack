import { use } from "react";
import type { CardRightProps } from "../../../../type/Type";

const CardRight = ({
  promise,
  isBtnclicked,
  addToStack,
  setAddToStack,
}: CardRightProps) => {
  const cardData = use(promise);

  const addedToStack = addToStack.map((name) =>
    cardData.find((card) => card.name === name)
  );

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 self-start">
      {isBtnclicked && addToStack.length > 0 ? (
        <>
          {/* Header */}
          <h3 className="text-[20px] font-semibold text-[#1e293b]">
            Your Stack
          </h3>

          <p className="mt-1 text-[12px] text-[#94a3b8]">
            {addedToStack.length} Technology Selected
          </p>

          {/* Selected Technologies */}
          <div className="mt-4 flex flex-col gap-2">
            {addedToStack.map((card) => (
              <div
                key={card?.id}
                className="flex items-center justify-between rounded-lg border border-[#e5e7eb] px-3 py-3"
              >
                {/* Icon + Name + Category */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img
                      src={card?.icon}
                      alt={card?.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-[#1e293b]">
                      {card?.name}
                    </h4>

                    <p className="text-sm text-[#94a3b8]">
                      {card?.category}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  value={card?.name}
                  onClick={(e) => {
                    const clickedName = e.currentTarget.value;

                    const newStack = addToStack.filter(
                      (name) => name !== clickedName
                    );

                    setAddToStack(newStack);
                  }}
                  className="cursor-pointer text-2xl text-[#94a3b8]"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setAddToStack([]);
            }}
            className="w-full cursor-pointer rounded-xl border border-[#fecaca] py-2 mt-4 text-[16px] font-semibold text-[#ef4444] hover:bg-[#fef2f2]"
          >
            Remove All
          </button>
        </>


      ) : (
        <>
          <h3 className="text-[20px] font-semibold text-[#1e293b]">
            Your Stack
          </h3>

          <p className="mt-2 text-[14px] leading-5.5 text-[#94a3b8]">
            No technologies selected yet.
          </p>

          <div className="mt-5 flex min-h-25 items-center justify-center rounded-2xl border border-dashed border-[#dbe4ee]">
            <p className="text-base text-[#94a3b8]">
              Your stack is empty.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardRight;