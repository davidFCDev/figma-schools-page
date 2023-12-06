/* eslint-disable @next/next/no-img-element */
import { SchoolProps } from "@/types";
import React from "react";
import BasicSchoolInfo from "../basic-info";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { LuArrowRightLeft, LuHeart } from "react-icons/lu";
import Link from "next/link";

const SchoolHeader = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="flex flex-col w-full border border-neutral-200 rounded-3xl">
      <div className="flex items-center justify-between small:justify-end bg-darkGreen text-white px-6 py-5 small:py-10 rounded-t-xl small:rounded-t-3xl">
        <img
          src={selectedSchool.logo}
          alt="school logo"
          className="block small:hidden w-16"
        />
        <h2 className="text-2xl small:text-3xl font-averia tracking-wider small:max-w-sm text-right leading-normal">
          {selectedSchool.name}
        </h2>
      </div>

      <div className="flex flex-col gap-5 small:gap-0 small:flex-row justify-between items-center text-sm px-6 py-8 font-semibold bg-white rounded-b-3xl">
        <div className="flex items-center relative">
          <img
            src={selectedSchool.logo}
            alt="school logo"
            className="absolute bottom-0 hidden small:block"
          />
          <div className="flex items-center gap-4 small:pl-44">
            <BasicSchoolInfo school={selectedSchool} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href={"/dashboard/schools/compare"} className="text-lg">
            <SpecialSmallButton text="Compare" icon={<LuArrowRightLeft />} css="px-5 py-1 small:py-2"/>
          </Link>
          <SpecialSmallButton icon={<LuHeart />} css="p-1 small:p-2 text-xs small:text-base" />
        </div>
      </div>
    </div>
  );
};

export default SchoolHeader;
