/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";

const Score = () => {
  return (
    <div className="flex flex-col small:flex-row w-full bg-white rounded-xl small:rounded-3xl shadow relative border border-green">
      <img
        src="/green-line.png"
        alt="green line background"
        className="hidden small:block absolute z-0 object-center object-contain right-0 h-full"
      />
      {/* Responsive */}
      <img
        src="/green-line.png"
        alt="green line background"
        className="block small:hidden absolute z-0 bottom-0 w-full"
      />

      <div className="flex flex-col gap-6 small:gap-0 small:flex-row w-full items-center justify-between py-6 small:py-20 px-6 small:px-14 z-10">
        <div className="flex flex-col gap-4 small:gap-6 items-start max-w-sm justify-center">
          <h2 className="text-4xl small:text-2xl font-semibold">
            Estimate your ATAR score
          </h2>
          <p className="text-sm small:text-base font-light tracking-wider small:pr-10 leading-relaxed">
            ReviseOnline ATAR calculator will give you an accurate estimate of
            what you can expect.
          </p>
          <button className="text-white bg-green flex items-center gap-2 px-5 small:px-10 py-2 small:py-3 rounded-full shadow hover:bg-green2">
            <span className="font-semibold text-sm small:text-lg">
              Try Calculator
            </span>
            <FaArrowRight />
          </button>
        </div>
        <img
          src="/calculator.png"
          alt="calculator"
          className="w-52 small:w-60 mb-8 ml-10"
        />
      </div>
    </div>
  );
};

export default Score;
