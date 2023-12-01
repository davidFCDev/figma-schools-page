/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";

const Score = () => {
  return (
    <div className="flex w-full bg-white rounded-3xl shadow relative">
      <img
        src="/green-line.png"
        alt="green line background"
        className="absolute z-0  object-center object-contain right-0 h-full"
      />

      <div className="flex w-full items-center justify-between py-20 px-14 z-10">
        <div className="flex flex-col gap-6 items-start max-w-sm justify-center">
          <h2 className="text-2xl font-semibold">Estimate your ATAR score</h2>
          <p className="text-base font-light tracking-wider pr-10 leading-relaxed">
            ReviseOnline ATAR calculator will give you an accurate estimate of
            what you can expect.
          </p>
          <button className="text-white bg-green flex items-center gap-2 px-10 py-3 rounded-full shadow hover:bg-green2">
            <span className="font-semibold text-lg">Try Calculator</span>
            <FaArrowRight />
          </button>
        </div>
        <img
          src="/calculator.png"
          alt="calculator"
          className="w-60"
        />
      </div>
    </div>
  );
};

export default Score;
