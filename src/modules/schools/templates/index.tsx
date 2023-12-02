'use client'
/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";
import SearchSchools from "../components/search-schools";

const SchoolsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <div className="bg-darkOrange text-white w-full flex flex-col p-14 items-center rounded-3xl relative z-0 ">
        <img
          src="/flower.png"
          alt="flower"
          className="w-26 absolute top-6 right-32"
        />
        <div className="flex flex-col gap10 max-w-xl items-center gap-10">
          <h1 className="text-5xl font-semibold font-averia text-center leading-tight">
            Search all the schools in Western Australia
          </h1>

          <SearchSchools />
        </div>
      </div>




    </main>
  );
};

export default SchoolsTemplate;
