/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const RankingBox = () => {
  return (
    <div className="flex w-full bg-white rounded-3xl shadow relative">
      <img
        src="/green-line.png"
        alt="green line background"
        className="absolute z-0  object-center object-contain right-0 h-full"
      />
      <div className="flex w-full items-center justify-between py-20 px-14 z-10">
        <div className="flex flex-col gap-6 items-start max-w-sm justify-center">
          <h2 className="text-2xl font-semibold">University Rankings</h2>
          <p className="text-base font-light tracking-wider pr-10 leading-relaxed">
            See how the top universities rank compared to each other.
          </p>
          <Link
            href={"/dashboard/university/rankings"}
            className="text-white bg-green flex items-center gap-2 px-10 py-3 rounded-full shadow hover:bg-green2"
          >
            <span className="font-semibold text-lg">See rankings</span>
            <FaArrowRight />
          </Link>
        </div>

        <img src="/book.png" alt="book" className="w-60" />
      </div>
    </div>
  );
};

export default RankingBox;
