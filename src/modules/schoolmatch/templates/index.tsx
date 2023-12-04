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
    <main className={`${style.page} flex gap-8 font-averia`}>
      <div className="flex flex-col gap-8 w-2/4 ">
        <SchoolmatchFilters />

        <div className="relative">
          <img src="/map2.png" alt="map" className="w-full z-0" />

          <div className="absolute bottom-5 right-5">
            <SpecialSmallButton
              text="Expand Map"
              css="px-10 py-1 text-xl"
              onClick={handleToggle}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-2/4">
        <SchoolsList handleToggle={handleToggle} />
      </div>

      {toggleMap && (
        <div className="absolute flex flex-col gap-10 w-full h-full bg-white left-0 top-0 p-5">
          <div className="flex items-center justify-between ">
            <img src="/logo-edufy2.png" alt="logo" className="" />
            <SpecialSmallButton
              text="Exit Map"
              css="px-10 py-1 text-xl"
              onClick={handleToggle}
            />
          </div>
          <img src="/map3.png" alt="map" className="w-full" />
          <div className="absolute z-20 left-12 top-36">
            <SchoolmatchFilters />
          </div>
        </div>
      )}
    </main>
  );
};

export default SchoolmatchTemplate;
