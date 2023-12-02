import BasicSelect from "@/modules/common/components/select";
import React from "react";
import { PiBuildings, PiCertificate, PiGenderIntersex } from "react-icons/pi";

const FilterSchools = () => {
  return (
    <div className="flex items-center justify-between px-2">
      <h2 className="font-semibold text-3xl font-avaria">School Results:</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-5 font-semibold">
          <div className="flex items-center w-44 justify-between bg-white shadow shadow-neutral-200 px-6 py-[15px] rounded-2xl">
            <span className="font-semibold">Med. ATAR</span>
            <div className="text-xl">
              <PiCertificate />
            </div>
          </div>
          <div className="flex items-center w-44 justify-between bg-white shadow shadow-neutral-200 px-6 py-[15px] rounded-2xl">
            <span className="font-semibold">Sector</span>
            <div className="text-xl">
              <PiBuildings />
            </div>
          </div>
          <div className="flex items-center w-44 justify-between bg-white shadow shadow-neutral-200 px-6 py-[15px] rounded-2xl">
            <span className="font-semibold">Type</span>
            <div className="text-xl">
            <PiGenderIntersex />
            </div>
          </div>
        </div>
        <BasicSelect label="Location" />
      </div>
    </div>
  );
};

export default FilterSchools;
