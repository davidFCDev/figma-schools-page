import React from "react";
import ListTitle from "../list-title";
import { SchoolProps } from "@/types";

const ProgramsOfferings = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="flex justify-between w-full gap-5">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-3xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
    </div>
  );
};

export default ProgramsOfferings;
