"use client";
/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";
import CompareTable from "../components/compare-table";
import { useState } from "react";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { RxCross1 } from "react-icons/rx";
import { RiSearchLine } from "react-icons/ri";
import SpecialButton from "@/modules/common/components/special-button";
import BasicSelect from "@/modules/common/components/select";
import SchoolResults from "../components/results-schools";
import { GoPlus } from "react-icons/go";

const SchoolCompareTemplate = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggle = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <CompareTable handleToggle={handleToggle}/>

      {toggleSearch && (
        <div
          style={{
            boxShadow: "0 -5px 30px -10px rgba(0, 0, 0, 0.3)",
          }}
          className="w-full h-full flex flex-col gap-8 absolute z-20 bg-white left-0 mt-10 rounded-3xl border border-neutral-200 items-center py-16 px-52"
        >
          <div className="absolute right-12 -top-4">
            <SpecialSmallButton icon={<RxCross1 />} css="p-1" onClick={handleToggle}/>
          </div>

          <div className="flex items-center gap-4 w-2/4">
            <div className="flex w-full items-center border border-neutral-200 px-5 py-3 rounded-2xl gap-1">
              <div className="text-2xl">
                <RiSearchLine />
              </div>
              <input
                type="text"
                placeholder="Search schools for compare"
                className="outline-none focus:outline-none w-full"
              />
            </div>
            <div className="font-semibold">
              <SpecialButton text="Search" />
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <h2 className="font-bold text-4xl font-averia">School results</h2>
            <div className="flex items-center gap-3">
              <BasicSelect label="Filter" />
              <BasicSelect label="Filter" />
              <BasicSelect label="Filter" />
            </div>
          </div>

          <div className="border border-neutral-200 rounded-3xl">
            <SchoolResults icon={<GoPlus />} />
          </div>
        </div>
      )}
    </main>
  );
};

export default SchoolCompareTemplate;
