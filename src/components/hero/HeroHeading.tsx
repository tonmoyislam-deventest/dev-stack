
const HeroHeading = () => {
  return (
    <>
      <div className="text-[60px] leading-[1.1] font-bold">
        <h1 className="whitespace-nowrap text-[#111827]">Build Your Ideal</h1>

        <h1>
          <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
      </div>

      <div className="mt-5 max-w-xl text-base text-[#475569]">
        <p >
          Explore frontend, backend, database, and tooling options,{" "}
        </p>
        <p>
          compare them side by side, and put together the stack that fits your
        </p>
        <p>next project.</p>
      </div>
    </>
  )
}

export default HeroHeading
