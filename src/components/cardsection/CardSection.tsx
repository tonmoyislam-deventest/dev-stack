import { Suspense, useState } from "react";
import CardHeading from "./card-section-heading/CardHeading";
import CardLeft from "./card-content/left/CardLeft";
import CardRight from "./card-content/right/CardRight";
import type { Card } from "../../type/Type";
import type { EventType } from "../../type/Type";
import { Flip, Bounce, toast } from "react-toastify";
import CardLeftSkeleton from "./card-content/left/CardLeftSkeleton";
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
      setAddToStack([...addToStack, e.currentTarget.value]);
      toast.success(`${e.currentTarget.value!} has been added to your stack!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.warning(`${e.currentTarget.value!} is already in your stack!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
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
          <Suspense fallback={<CardLeftSkeleton/>}>
            <CardLeft
              promise={promise}
              btnCliked={btnCliked}
              isBtnclicked={isBtnclicked}
              addToStack={addToStack}
            />
          </Suspense>

          {/* Right Side */}
          <CardRight
            promise={promise}
            addToStack={addToStack}
            isBtnclicked={isBtnclicked}
            setAddToStack={setAddToStack}
          />
        </div>
      </div>
    </section>
  );
};

export default CardSection;
