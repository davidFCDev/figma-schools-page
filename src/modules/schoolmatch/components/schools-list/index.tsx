/* eslint-disable @next/next/no-img-element */
import { SCHOOLS } from "@/constants/schools";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { GenderIcon } from "@/modules/schools/components/gender-icon";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoExpand } from "react-icons/io5";
import { PiBuildings, PiCertificate } from "react-icons/pi";
import { RiHeartLine } from "react-icons/ri";

const SchoolsList = ({ handleToggle }: { handleToggle: () => void }) => {
  return (
    <>
      {SCHOOLS.map((school) => (
        <div
          key={school.id}
          className="flex flex-col gap-5 border border-neutral-200 rounded-2xl bg-white p-4 small:p-5 "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={school.small_logo} alt={school.name} className="w-14" />
              <h3 className="max-w-[150px] small:max-w-[180px] text-base small:text-lg font-semibold">
                {school.name}
              </h3>
            </div>
            <SpecialSmallButton icon={<RiHeartLine />} css="p-1" />
          </div>

          {/* Desktop */}
          <div className="hidden small:flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
              <GrLocation />
              <span>{school.ubication}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
              <PiBuildings />
              <span>{school.type}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
              <PiCertificate />
              <span>{school.atar}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
              <GenderIcon selectedSchool={school} />
              <span>{school.gender}</span>
            </div>
            <button
              className="bg-darkOrange p-2 text-2xl small:text-3xl text-white rounded-xl small:rounded-2xl hover:bg-orange"
              onClick={handleToggle}
            >
              <IoExpand />
            </button>
          </div>

          {/* Responsive */}
          <div className="small:hidden flex items-end justify-between text-xs">
            <div className="flex flex-wrap gap-2 w-full items-center">
              <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
                <GrLocation />
                <span>{school.ubication}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
                <PiBuildings />
                <span>{school.type}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
                <PiCertificate />
                <span>{school.atar}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-2xl">
                <GenderIcon selectedSchool={school} />
                <span>{school.gender}</span>
              </div>
            </div>
            <button
              className="bg-darkOrange p-2 text-2xl small:text-3xl text-white rounded-xl small:rounded-2xl hover:bg-orange"
              onClick={handleToggle}
            >
              <IoExpand />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SchoolsList;
