/* eslint-disable @next/next/no-img-element */
import { SchoolProps } from "@/types";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { PiBuildings, PiCertificate, PiGenderIntersex, PiTrophy } from "react-icons/pi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from "react";
import { RiHeartLine } from "react-icons/ri";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { IoLocationOutline } from "react-icons/io5";

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
        <span>{school.id}</span>
        <img src={school.logo} alt={school.name} className="w-14" />
        <h3 className="max-w-[250px]">{school.name}</h3>
      </div>

      <div className="flex gap-6 items-center text-base">
        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <IoLocationOutline />
          </div>
          <span>{school.ubication}</span>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <PiBuildings />
          </div>
          <span>{school.type}</span>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <PiCertificate />
          </div>
          <span>{school.atar}</span>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <PiGenderIntersex />
          </div>
          <span>{school.gender}</span>
        </div>

        <SpecialSmallButton icon={<RiHeartLine />} />

        <div onClick={handleSelect} className="hover:cursor-pointer">
          {isArrowUp ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
    </div>
  );
};

export default School;
