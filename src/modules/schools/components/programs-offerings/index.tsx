import React from "react";
import ListTitle from "../list-title";
import { SchoolProps } from "@/types";

const ProgramsOfferings = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <div className="flex flex-col small:flex-row justify-between w-full gap-7 small:gap-5 pt-5 small:pt-0">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl small:text-2xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl small:text-2xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl small:text-2xl font-semibold font-averia pl-5">List Title</h2>
        <ListTitle selectedSchool={selectedSchool} />
      </div>
    </div>
  );
};

export default ProgramsOfferings;
