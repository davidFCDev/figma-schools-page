"use client";
import BasicSlider from "@/modules/common/components/slider";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import React from "react";
import { useState } from "react";
import FilterOption from "../filter-option";

const SchoolmatchFilters = ({ styles }: { styles?: string }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div
      className={`${styles} flex flex-col items-center gap-5 small:gap-10 border border-neutral-200 rounded-2xl bg-white px-5 small:px-8 py-5 w-full`}
    >
      <div className="flex flex-col gap-5 w-full">
        <h2 className="font-semibold text-xl small:text-2xl text-center small:text-left">Academic Preference</h2>
        <div className="px-4">
          <BasicSlider />
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col items-start gap-3 small:gap-5 w-full">
          <h2 className="font-semibold text-xl small:text-2xl text-center small:text-left w-full">School Type</h2>
          <div className="flex flex-wrap items-center justify-center w-full gap-3">
            <FilterOption
              text="Private 🔒"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="Public 🔓"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="No Preference 🤷‍♀"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 small:gap-5 w-full">
          <h2 className="font-semibold text-xl small:text-2xl text-center small:text-left w-full">Kid’s interests</h2>
          <div className="flex flex-wrap items-center justify-center w-full gap-3">
            <FilterOption
              text="Music 🎹"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="Sports 🏀"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="Science 🧪"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center w-full gap-3">
            <FilterOption
              text="Acting 🤡"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="Law 👨‍⚖️"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
            <FilterOption
              text="Animal Welfare 🦘"
              selectedOptions={selectedOptions}
              toggleOption={toggleOption}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center font-semibold text-xl">
        <SpecialSmallButton text="Start" css="px-10 small:px-16 py-1 text-sm small:text-base" />
      </div>
    </div>
  );
};

export default SchoolmatchFilters;
