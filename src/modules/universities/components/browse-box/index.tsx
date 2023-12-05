/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BrowseBox = () => {
  return (
    <div className="flex flex-col gap-10 small:gap-0 small:flex-row w-full items-center justify-between border border-orange bg-darkOrange text-white py-6 small:py-20 px-6 small:px-14 rounded-xl small:rounded-3xl shadow">
      <div className="flex flex-col gap-6 items-start max-w-md justify-center">
        <h2 className="text-4xl small:text-2xl font-semibold">
          University Scholarships
        </h2>
        <p className="text-sm small:text-base font-light tracking-wider small:pr-10 leading-relaxed">
          Browse between the hundreds of scholarships at the best universities
          in Western Australia.
        </p>
        <Link
          href={"/dashboard/university/scholarships"}
          className="text-darkOrange bg-white flex items-center gap-2 px-5 small:px-10 py-2 small:py-3 rounded-full shadow hover:bg-gray"
        >
          <span className="font-semibold text-sm small:text-lg">Browse Scholarships</span>
          <FaArrowRight />
        </Link>
      </div>

      <img src="/handle.png" alt="handle" className="w-48 small:w-60"/>
    </div>
  );
};

export default BrowseBox;
