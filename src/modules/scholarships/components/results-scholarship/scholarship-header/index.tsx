/* eslint-disable @next/next/no-img-element */
import { ScholarshipProps } from "@/types";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { PiHandPalmLight, PiTrophy } from "react-icons/pi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import SpecialSmallButton from "@/modules/common/components/special-small-button";

interface Scholarship {
  scholarship: ScholarshipProps;
  onSelect: (scholarshipId: number) => void;
  selectedScholarship: number | null;
}

const ScholarshipHeader: React.FC<Scholarship> = ({
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
    <div className="flex flex-col gap-5 small:gap-0 small:flex-row justify-between items-center">
      <div className="flex gap-1 small:gap-0 items-center justify-between w-full small:w-max">
        <div
          className="flex gap-2 small:gap-4 items-center hover:cursor-pointer "
          onClick={() => onSelect(scholarship.id)}
        >
          <span className="text-xs small:text-base pt-2 small:pt-0 hidden small:block">{scholarship.id}</span>
          <img src={scholarship.logo} alt={scholarship.name} className="w-12 small:w-14" />
          <h3 className="text-lg small:text-xl">{scholarship.name}</h3>
        </div>
        <div
          onClick={handleSelect}
          className="hover:cursor-pointer block small:hidden"
        >
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>

      <div className="flex flex-wrap small:flex-nowrap gap-4 small:gap-6 items-center justify-center small:justify-normal">
        <div className=" flex gap-3 items-center p-2 small:p-4 bg-white rounded-2xl small:rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-xl small:text-2xl">
            <PiTrophy />
          </div>
          <span className="text-sm small:text-base">
            ${scholarship.price.toLocaleString()}
          </span>
        </div>

        <div className=" flex gap-3 items-center p-2 small:p-4 bg-white rounded-2xl small:rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-xl small:text-2xl">
            <LuClock3 />
          </div>
          <span className="text-sm small:text-base">{scholarship.date}</span>
        </div>

        <SpecialSmallButton
          text="Apply"
          icon={<PiHandPalmLight />}
          css="px-4 py-1 small:py-2 text-sm small:text-base"
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

export default ScholarshipHeader;
