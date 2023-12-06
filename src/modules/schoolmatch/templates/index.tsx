"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import SchoolmatchFilters from "../components/schoolmatch-filters";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import SchoolsList from "../components/schools-list";
import { useState } from "react";

const SchoolmatchTemplate = () => {
  const [toggleMap, setToggleMap] = useState(false);

  const handleToggle = () => {
    setToggleMap(!toggleMap);
  };

  return (
    <main
      className={`${style.page} flex flex-col small:flex-row gap-8 font-averia`}
    >
      <div className="flex flex-col gap-8 small:w-2/4 ">
        <SchoolmatchFilters />

        <div className="relative">
          <img src="/map2.png" alt="map" className="w-full z-0" />

          <div className="absolute bottom-4 right-4">
            <SpecialSmallButton
              text="Expand Map"
              css="px-10 small:px-16 py-1 text-sm small:text-base"
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SchoolsList handleToggle={handleToggle} />
      </div>

      {toggleMap && (
        <div className="absolute flex flex-col gap-10 w-full h-full bg-white left-0 top-0 p-5">
          <div className="flex items-center justify-between ">
            <img src="/logo-edufy2.png" alt="logo" className="" />
            <SpecialSmallButton
              text="Exit Map"
              css="px-5 small:px-10 py-1 text-sm small:text-xl"
              onClick={handleToggle}
            />
          </div>
          <img src="/map3.png" alt="map" className="w-full" />

          {/* Filters Expand Map */}
          <div className="hidden small:block absolute z-20 left-12 top-36">
            <SchoolmatchFilters styles="shadow-2xl shadow-neutral-400" />
          </div>
        </div>
      )}
    </main>
  );
};

export default SchoolmatchTemplate;
