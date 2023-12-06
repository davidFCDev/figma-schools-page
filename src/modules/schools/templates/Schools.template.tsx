"use client";
/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";
import SearchSchools from "../components/search-schools";
import { SchoolContext } from "@/lib/context/schools-context";
import { useContext } from "react";
import FilterSchools from "../components/filter-schools";
import SchoolResults from "../components/results-schools";

const SchoolsTemplate = () => {
  const context = useContext(SchoolContext);

  if (!context) {
    return <div>No context provider found</div>;
  }

  const results = context.searchResults;

  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <div className="bg-darkOrange text-white w-full flex flex-col p-6 small:p-14 items-center rounded-xl small:rounded-3xl relative z-0 ">
        <img
          src="/map-vector.png"
          alt="flower"
          className="w-32 small:w-40 absolute small:bottom-6 left-14 top-16"
        />
        <img
          src="/flower.png"
          alt="flower"
          className="w-14 small:w-26 absolute small:top-6 small:right-32 right-6 top-28"
        />
        <div className="flex flex-col max-w-lg items-center gap-20 small:gap-10">
          <h1 className="text-3xl small:text-5xl font-semibold font-averia text-center leading-tight">
            Search all the schools in Western Australia
          </h1>

          <div className="flex gap-5">
            <SearchSchools />
          </div>
        </div>
      </div>

      <FilterSchools />

      <div>
        <SchoolResults />
      </div>
    </main>
  );
};

export default SchoolsTemplate;
