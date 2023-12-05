/* eslint-disable @next/next/no-img-element */
import { UniversityScholarshipProps } from "@/types";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { PiHandPalmLight } from "react-icons/pi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import SpecialSmallButton from "@/modules/common/components/special-small-button";

interface Scholarship {
  scholarship: UniversityScholarshipProps;
  onSelect: (scholarshipId: number) => void;
  selectedScholarship: number | null;
}

const TitleResults: React.FC<Scholarship> = ({
  scholarship,
  onSelect,
  selectedScholarship,
}) => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleSelect = () => {
    setIsArrowUp(!isArrowUp);
    onSelect(scholarship.id);
  };

  useEffect(() => {
    setIsArrowUp(selectedScholarship === scholarship.id);
  }, [selectedScholarship, scholarship.id]);

  return (
    <div className="flex flex-col small:flex-row justify-between items-center w-full">
      <div className="flex items-center justify-between w-full small:w-min">
        <div
          className="flex gap-4 items-center hover:cursor-pointer w-full"
          onClick={() => onSelect(scholarship.id)}
        >
          <span>{scholarship.id}</span>
          <img src={scholarship.logo} alt={scholarship.name} className="w-10 small:w-14" />
          <h3 className="max-w-[250px]">{scholarship.name}</h3>
        </div>
        <div
          onClick={handleSelect}
          className="hover:cursor-pointer block small:hidden text-sm"
        >
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>

      <div className="flex flex-col small:flex-row gap-4 small:gap-6 items-center">
        <div className="flex items-center gap-4 small:gap-6 pt-4 small:pt-0">
          <div className="flex gap-3 items-center p-2 small:p-4 bg-white rounded-2xl small:rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
            <div className="text-xl small:text-2xl">
              <LuClock3 />
            </div>
            <span className="text-xs small:text-base">
              ${scholarship.opens}
            </span>
          </div>

          <div className="flex gap-3 items-center p-2 small:p-4 bg-white rounded-2xl small:rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
            <div className="text-xl small:text-2xl">
              <LuClock3 />
            </div>
            <span className="text-xs small:text-base">
              {scholarship.closes}
            </span>
          </div>
        </div>

        <SpecialSmallButton
          text="Apply"
          icon={<PiHandPalmLight />}
          css="small:px-4 small:py-2 px-2 py-1 text-sm small:text-base"
        />

        <div
          onClick={handleSelect}
          className="hover:cursor-pointer hidden small:block"
        >
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default TitleResults;
