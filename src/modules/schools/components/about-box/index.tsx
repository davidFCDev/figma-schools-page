import { SchoolProps } from "@/types";
import React from "react";

const AboutBox = ({selectedSchool}: {selectedSchool: SchoolProps}) => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-3xl border border-neutral-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold tracking-wide pl-6">About</h3>
        <button className="text-darkGreen font-bold shadow shadow-neutral-300 px-5 py-1 rounded-xl">
          Visit Website
        </button>
      </div>
      <p className="font-normal">{selectedSchool.about}</p>
    </div>
  );
};

export default AboutBox;
