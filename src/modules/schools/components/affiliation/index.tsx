import { SchoolProps } from "@/types";
import React from "react";
import { PiBooksLight, PiCrossLight, PiRuler } from "react-icons/pi";
import { GenderIcon } from "../gender-icon";

const Affiliation = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-3xl border border-neutral-200">
      <h3 className="text-xl font-bold tracking-wide pl-6">
        Type and Affiliation
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-neutral-500">Sector</span>
          <div className="border border-neutral-200 shadow shadow-neutral-200 p-3 rounded-xl text-2xl">
            <PiBooksLight />
          </div>
          <p className="font-semibold">{selectedSchool.sector}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-neutral-500">Level</span>
          <div className="border border-neutral-200 shadow shadow-neutral-200 p-3 rounded-xl text-2xl">
            <PiRuler />
          </div>
          <p className="font-semibold">{selectedSchool.level}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-neutral-500">Gender</span>
          <div className="border border-neutral-200 shadow shadow-neutral-200 p-3 rounded-xl text-2xl">
            <GenderIcon selectedSchool={selectedSchool} />
          </div>
          <p className="font-semibold">{selectedSchool.gender_2}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-neutral-500">Religion</span>
          <div className="border border-neutral-200 shadow shadow-neutral-200 p-3 rounded-xl text-2xl">
            <PiCrossLight />
          </div>
          <p className="font-semibold">{selectedSchool.religion}</p>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
