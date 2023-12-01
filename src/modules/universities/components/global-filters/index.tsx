import React from "react";
import { IoMdGlobe } from "react-icons/io";

const GlobalFilters = () => {
  return (
    <div className="flex w-full justify-between px-5 font-semibold">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white rounded-2xl shadow border border-neutral-200 py-3 px-5"
        >
          <span>Global Ranking</span>
          <div className="text-2xl">
            <IoMdGlobe />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlobalFilters;