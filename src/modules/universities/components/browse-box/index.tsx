/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BrowseBox = () => {
  return (
    <div className="flex w-full items-center justify-between bg-darkOrange text-white py-20 px-14 rounded-3xl shadow">
      <div className="flex flex-col gap-6 items-start max-w-md justify-center">
        <h2 className="text-2xl font-semibold">University Scholarships</h2>
        <p className="text-base font-light tracking-wider pr-10 leading-relaxed">
          Browse between the hundreds of scholarships at the best universities
          in Western Australia.
        </p>
        <Link href={"/dashboard/university/scholarships"} className="text-darkOrange bg-white flex items-center gap-2 px-10 py-3 rounded-full shadow hover:bg-gray">
          <span className="font-semibold text-lg">Browse Scholarships</span>
          <FaArrowRight />
        </Link>
      </div>

        <img src="/handle.png" alt="handle" />
    </div>
  );
};

export default BrowseBox;
