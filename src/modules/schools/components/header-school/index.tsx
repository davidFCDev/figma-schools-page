/* eslint-disable @next/next/no-img-element */
import { SchoolProps } from "@/types";
import React from "react";
import BasicSchoolInfo from "../basic-info";
import SpecialButton from "@/modules/common/components/special-button";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { LuArrowRightLeft, LuHeart } from "react-icons/lu";
import Link from "next/link";

const SchoolHeader = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="flex flex-col w-full border border-neutral-200 rounded-3xl">
      <div className="flex justify-end bg-darkGreen text-white px-6 py-10 rounded-t-3xl">
        <h2 className="text-3xl font-averia tracking-wider max-w-sm text-right leading-normal">
          {selectedSchool.name}
        </h2>
      </div>

      <div className="flex justify-between items-center text-sm px-6 py-8 font-semibold bg-white rounded-b-3xl">
        <div className="flex items-center relative">
          <img
            src={selectedSchool.logo}
            alt="school logo"
            className="absolute bottom-0"
          />
          <div className="flex items-center gap-4 pl-44">
            <BasicSchoolInfo school={selectedSchool} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/dashboard/schools/compare"} className="text-lg">
            <SpecialButton text="Compare" icon={<LuArrowRightLeft />} />
          </Link>
          <SpecialSmallButton icon={<LuHeart />} css="p-2"/>
        </div>
      </div>
    </div>
  );
};

export default SchoolHeader;
