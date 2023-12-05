/* eslint-disable @next/next/no-img-element */
import { FaArrowRight } from "react-icons/fa";

const Browse = () => {
  return (
    <div className="flex flex-col gap-2 small:gap-0 small:flex-row w-full justify-between bg-darkOrange text-white small:pl-14 rounded-xl small:rounded-3xl shadow">
      <div className="flex flex-col gap-4 small:gap-6 items-start max-w-md justify-center p-6 small:p-0">
        <h2 className="text-4xl small:text-2xl font-semibold">
          Take a look at the study resources at ReviseOnline
        </h2>
        <p className="text-sm small:text-base font-light tracking-wider small:pr-10 leading-relaxed">
          We have hundreds of hours of study materials amongst all the subjects.
        </p>
        <button className="text-darkOrange bg-white flex items-center gap-2 px-5 small:px-10 py-2 small:py-3 rounded-full shadow hover:bg-gray">
          <span className="font-semibold text-sm small:text-lg">Browse resources</span>
          <FaArrowRight />
        </button>
      </div>

      <div className="hidden small:flex">
        <div className="flex flex-col">
          <img src="/chart3.png" alt="chart" />
          <img src="/chart1.png" alt="chart" />
        </div>
        <div className="flex flex-col rounded-r-3xl overflow-hidden">
          <img src="/chart2.png" alt="chart" />
          <img src="/chart4.png" alt="chart" />
        </div>
      </div>

      <div className="flex small:hidden pr-5 pl-2 w-full">
        <div className="flex flex-col-reverse gap-5 pt-4">
          <img src="/chart3.png" alt="chart" />
          <img src="/chart1.png" alt="chart" />
        </div>
        <div className="flex flex-col rounded-r-3xl overflow-hidden">
          <img src="/chart2.png" alt="chart" />
          <img src="/chart4.png" alt="chart" />
        </div>
      </div>

    </div>
  );
};

export default Browse;
