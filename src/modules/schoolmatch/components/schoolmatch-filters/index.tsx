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
        // If the option is already selected, remove it from the array
        return prevSelected.filter((item) => item !== option);
      } else {
        // If the option is not selected, add it to the array
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div
      className={`${styles} flex flex-col gap-10 border border-neutral-200 rounded-2xl bg-white px-8 py-5 w-full`}
    >
      <div className="flex flex-col gap-5 w-full">
        <h2 className="font-semibold text-2xl">Academic Preference</h2>
        <div className="px-4">
          <BasicSlider />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-5">
          <h2 className="font-semibold text-2xl">School Type</h2>
          <div className="flex items-center justify-between w-full gap-3">
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

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-semibold text-2xl">Kid’s interests</h2>
          <div className="flex items-center justify-between w-full">
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

          <div className="flex items-center justify-between w-full">
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
        <SpecialSmallButton text="Start" css="px-16 py-1" />
      </div>
    </div>
  );
};

export default SchoolmatchFilters;
