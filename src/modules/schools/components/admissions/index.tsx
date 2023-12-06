import { SchoolProps } from "@/types";
import React from "react";
import FeesTable from "../fees-table";
import { GenderIcon } from "../gender-icon";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import SelectivePrograms from "../selective-programs";
import ScholarshipTests from "../scholarship-tests";
import ScholarshipList from "../scholarship-lists";

const Admissions = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="w-full flex items-start gap-5 justify-between">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col small:flex-row gap-5 justify-between w-full">
          <div className="flex flex-col gap-8 small:w-9/12 bg-white border border-neutral-200 rounded-2xl p-5">
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-bold">💸 School Fees</h2>
              <button className="text-xs text-green font-semibold border border-neutral-200 px-4 py-1 rounded-lg">
                Learn more
              </button>
            </div>
            <div>
              <FeesTable selectedSchool={selectedSchool} />
            </div>
          </div>

          <div className="flex small:flex-col small:gap-5 items-center small:items-stretch justify-between small:w-2/6">
            <div className="flex flex-col justify-between bg-white border border-neutral-200 rounded-2xl p-4 h-full gap-4 small:gap-0">
              <h2 className="text-xl font-bold">👦👧 Gender</h2>
              <div className="flex gap-2 items-center justify-center">
                <div className="text-3xl p-2 border border-neutral-200 rounded-xl">
                  <GenderIcon selectedSchool={selectedSchool} />
                </div>
                <span className="font-semibold">
                  {selectedSchool.admissions.gender}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-white border border-neutral-200 rounded-2xl p-4 h-full gap-4 small:gap-0">
              <h2 className="text-xl font-bold">🗓️ Open Days</h2>
              <div className="flex gap-2 items-center justify-center">
                <SpecialSmallButton text="Find out more" css="px-2 py-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col small:flex-row justify-between items-center gap-5 w-full">
          <div className="flex flex-col gap-2 small:w-2/4 w-full">
            <h2 className="text-xl font-semibold font-averia pl-5">
              Selective Programs
            </h2>
            <SelectivePrograms selectedSchool={selectedSchool} />
          </div>
          <div className="flex flex-col gap-2 small:w-2/4 w-full">
            <h2 className="text-2xl font-semibold font-averia pl-5">
              Scholarship Tests
            </h2>
            <ScholarshipTests selectedSchool={selectedSchool} />
          </div>
        </div>

        {/* Responsive */}
        <div className="flex small:hidden flex-col gap-2 small:w-2/4 w-full">
          <h2 className="text-2xl font-semibold font-averia pl-5">
            List of Scholarships
          </h2>
          <ScholarshipList selectedSchool={selectedSchool} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden small:flex flex-col gap-2 small:w-2/4 w-full">
        <h2 className="text-2xl font-semibold font-averia pl-5">
          List of Scholarships
        </h2>
        <ScholarshipList selectedSchool={selectedSchool} />
      </div>
    </div>
  );
};

export default Admissions;
