import { Suspense, useState } from "react";
import CardHeading from "./card-section-heading/CardHeading";
import CardLeft from "./card-content/left/CardLeft";
import CardRight from "./card-content/right/CardRight";
import type { Card } from "../../type/Type";
import type { EventType } from "../../type/Type";
// get Card Data by fetch
const getCardData = async (): Promise<Card[]> => {
  const response = await fetch("/CardData.json");
  const data = await response.json();

  return data;
};
const promise = getCardData();

const CardSection = () => {
  const [addToStack, setAddToStack] = useState<string[]>([]);
  const [isBtnclicked, setIsBtnclicked] = useState<boolean>(false);


  const btnCliked = (e: EventType) => {
  setIsBtnclicked(true);

  if (!addToStack.includes(e.currentTarget.value)) {
    setAddToStack([
      ...addToStack,
      e.currentTarget.value,
    ]);
  }
};

  return (
    // Card Section
    <section className="w-full bg-white">
      <div className="mx-auto container px-10">
        {/* Heading */}
        <CardHeading />

        {/* Cards */}
        <div className="mt-10 grid grid-cols-[3fr_1fr] gap-6">
          {/* Left Side */}
          <Suspense fallback={<div>Loading...</div>}>
            <CardLeft
              promise={promise}
              btnCliked={btnCliked}
              isBtnclicked={isBtnclicked}
              addToStack={addToStack}
            />
          </Suspense>

          {/* Right Side */}
          <CardRight promise={promise} 
              addToStack={addToStack}
              isBtnclicked= {isBtnclicked}
              setAddToStack={setAddToStack}/>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
