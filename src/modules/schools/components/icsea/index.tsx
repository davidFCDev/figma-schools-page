import { SchoolProps } from "@/types";
import React from "react";
import Table from "../icsea-table";

const Icsea = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="w-full flex flex-col gap-5 bg-white border border-neutral-200 rounded-2xl p-5 font-semibold">
      <div className="flex justify-between w-full">
        <h2 className="text-xl font-bold">🙋‍♀ ICSEA</h2>
        <button className="text-xs text-green font-semibold border border-neutral-200 px-4 py-1 rounded-lg">
          Learn more
        </button>
      </div>
      <div className="flex justify-between w-full">
        <h3>
          School <strong>ICSEA</strong> value:
        </h3>
        <span className="text-darkOrange bg-orangePalid px-2 rounded-md font-bold">
          {selectedSchool.performance.icsea.school_value}
        </span>
      </div>
      <div className="flex justify-between w-full">
        <h3>
          Average <strong>ICSEA</strong> value:
        </h3>
        <span className="text-darkOrange bg-orangePalid px-2 rounded-md font-bold">
          {selectedSchool.performance.icsea.average_value}
        </span>
      </div>

      <div className="pt-5">
        <Table selectedSchool={selectedSchool} />
      </div>
    </div>
  );
};

export default Icsea;
