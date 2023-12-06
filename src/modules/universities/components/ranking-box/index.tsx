/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const RankingBox = () => {
  return (
    <div className="flex w-full bg-white rounded-3xl shadow relative border border-green small:border-white">
      <img
        src="/green-line.png"
        alt="green line background"
        className="absolute z-0 object-center object-contain right-0 h-full hidden small:block"
      />
      {/* Responsive */}

      <img
        src="/green-line.png"
        alt="green line background"
        className="absolute z-0 block small:hidden bottom-0"
      />

      <div className="flex flex-col gap-10 small:gap-0 small:flex-row w-full items-center justify-between py-6 small:py-20 px-6 small:px-14 z-10">
        <div className="flex flex-col gap-6 items-start max-w-sm justify-center">
          <h2 className="text-4xl small:text-2xl font-semibold">
            University Rankings
          </h2>
          <p className="text-sm small:text-base font-light tracking-wider small:pr-10 leading-relaxed">
            See how the top universities rank compared to each other.
          </p>
          <Link
            href={"/dashboard/university/rankings"}
            className="text-white bg-green flex items-center gap-2 px-6 small:px-10 py-2 small:py-3 rounded-full shadow hover:bg-green2"
          >
            <span className="font-semibold text-sm small:text-lg">See rankings</span>
            <FaArrowRight />
          </Link>
        </div>

        <img src="/book.png" alt="book" className="w-48 small:w-60" />
      </div>
    </div>
  );
};

export default RankingBox;
