/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";

const Browse = () => {
  return (
    <div className="flex w-full justify-between bg-darkOrange text-white pl-14 rounded-3xl shadow">
      <div className="flex flex-col gap-6 items-start max-w-md justify-center">
        <h2 className="text-2xl font-semibold">
          Take a look at the study resources at ReviseOnline
        </h2>
        <p className="text-base font-light tracking-wider pr-10 leading-relaxed">
          We have hundreds of hours of study materials amongst all the subjects.
        </p>
        <button className="text-darkOrange bg-white flex items-center gap-2 px-10 py-3 rounded-full shadow hover:bg-gray">
          <span className="font-semibold text-lg">Browse resources</span>
          <FaArrowRight />
        </button>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <img src="/chart3.png" alt="chart" />
          <img src="/chart1.png" alt="chart" />
        </div>
        <div className="rounded-r-3xl overflow-hidden">
          <img src="/chart2.png" alt="chart" />
          <img src="/chart4.png" alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
