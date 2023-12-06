/* eslint-disable @next/next/no-img-element */
import YearSelect from "@/modules/common/components/year-select";
import { SchoolProps } from "@/types";
import React from "react";

const MedianScore = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="w-full flex flex-col gap-16 small:gap-0 justify-between bg-white border border-neutral-200 rounded-2xl p-3 small:p-5 font-semibold">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">🏆 Median ATAR Score</h2>
          <YearSelect />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="px-5 py-2 rounded-xl bg-darkGreen text-white">
            National Average
          </div>
          <div className="px-5 py-2 rounded-xl bg-darkOrange text-white">
            This School
          </div>
        </div>
      </div>

      <div className="flex relative">
        <img src="/chart-lines.png" alt="chart" className="w-full" />
        <div className="flex flex-col bg-white border border-neutral-200 rounded-2xl absolute py-2 small:py-3 px-3 small:px-6 left-[12.5%] small:left-[14%] -top-10 small:-top-5">
          <div className="flex items-center gap-2">
            <div className="bg-darkOrange p-[5px] rounded-full" />
            <span className="text-sm">
              {selectedSchool.performance.median_score[0][2019].this_school}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-darkGreen p-[5px] rounded-full" />
            <span className="text-sm">
              {
                selectedSchool.performance.median_score[0][2019]
                  .national_average
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedianScore;
