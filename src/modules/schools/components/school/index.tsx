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
    <div className="flex justify-between items-center">
      <div
        className="flex gap-4 items-center hover:cursor-pointer"
        onClick={() => onSelect(school.id)}
      >
        <span className="font-light">{school.id}</span>
        <img src={school.logo} alt={school.name} className="w-14" />
        <h3 className="max-w-[180px] text-base">{school.name}</h3>
      </div>

      <div className="flex gap-6 items-center text-base">
        <BasicSchoolInfo school={school} />

        <SpecialSmallButton icon={<RiHeartLine />} />

        <div onClick={handleSelect} className="hover:cursor-pointer">
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default School;
