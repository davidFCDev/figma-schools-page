import { SchoolProps } from "@/types";
import React from "react";

const YearRange = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white border border-neutral-200 rounded-2xl p-5 font-semibold">
      <h2 className="text-xl font-bold">🕰️ Year Range</h2>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Range:</h3>
        <span className="text-darkOrange bg-orangePalid px-3 rounded-md font-bold">
          {selectedSchool.performance.year_range}
        </span>
      </div>
    </div>
  );
};

export default YearRange;
