import React from "react";
import { IoMdGlobe } from "react-icons/io";

const GlobalFilters = () => {
  return (
    <div className="grid grid-cols-2 small:flex gap-4 small:gap-0 w-full justify-between px-5 font-semibold">
      <div className="flex items-center justify-between gap-3 bg-white rounded-xl small:rounded-2xl shadow border border-neutral-200 py-2 px-3 small:py-3 small:px-5">
        <span>Global Ranking</span>
        <div className="text-2xl">
          <IoMdGlobe />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-white rounded-xl small:rounded-2xl shadow border border-neutral-200 py-2 px-3 small:py-3 small:px-5">
        <span>Global Ranking</span>
        <div className="text-2xl">
          <IoMdGlobe />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-white rounded-xl small:rounded-2xl shadow border border-neutral-200 py-2 px-3 small:py-3 small:px-5">
        <span>Global Ranking</span>
        <div className="text-2xl">
          <IoMdGlobe />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-white rounded-xl small:rounded-2xl shadow border border-neutral-200 py-2 px-3 small:py-3 small:px-5">
        <span>Global Ranking</span>
        <div className="text-2xl">
          <IoMdGlobe />
        </div>
      </div>
    </div>
  );
};

export default GlobalFilters;
