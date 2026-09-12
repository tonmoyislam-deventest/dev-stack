import { Suspense } from "react";
import CardHeading from "./card-section-heading/CardHeading"
import CardLeft from "./card-content/left/CardLeft";
import CardRight from "./card-content/right/CardRight";
import type {Card} from "../../type/Type"

// Card Data
const getCardData = async (): Promise<Card[]> => {
  const response = await fetch("/CardData.json");
  const data = await response.json();

  return data;
};

const promise = getCardData();


const CardSection = () => {
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
            <CardLeft promise={promise}/>
          </Suspense>

          {/* Right Side */}
          <CardRight />

        </div>

      </div>
    </section>
  );
};

export default CardSection;