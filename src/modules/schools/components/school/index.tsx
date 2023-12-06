/* eslint-disable @next/next/no-img-element */
import { SchoolProps } from "@/types";
import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import { RiHeartLine } from "react-icons/ri";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import BasicSchoolInfo from "../basic-info";

interface School {
  school: SchoolProps;
  onSelect: (schoolId: number) => void;
  selectedSchool: number | null;
}

const School: React.FC<School> = ({ school, onSelect, selectedSchool }) => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const handleSelect = () => {
    setIsArrowUp(!isArrowUp);
    onSelect(school.id);
  };

  useEffect(() => {
    setIsArrowUp(selectedSchool === school.id);
  }, [selectedSchool, school.id]);

  return (
    <div className="flex flex-col gap-4 small:gap-0 small:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full small:w-max">
        <div
          className="flex gap-2 small:gap-4 items-center justify-start w-full small:w-max hover:cursor-pointer"
          onClick={() => onSelect(school.id)}
        >
          <span className="font-light hidden small:block">{school.id}</span>
          <img src={school.logo} alt={school.name} className="w-14" />
          <h3 className="small:max-w-[180px] text-lg small:text-xl">
            {school.name}
          </h3>
        </div>
        <div
          onClick={handleSelect}
          className="hover:cursor-pointer flex small:hidden"
        >
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>

      <div className="flex flex-col small:flex-row gap-6 items-center text-base">
        <BasicSchoolInfo school={school} />

        <div className="hidden small:flex">
          <SpecialSmallButton icon={<RiHeartLine />} css="p-1" />
        </div>
      </div>
    </div>
  );
};

export default School;
