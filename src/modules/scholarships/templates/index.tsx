"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import BasicSelect from "../../common/components/select";
import SearchScholarship from "../components/search-scholarship";
import Results from "../components/results-scholarship";

const ScholarshipsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-5 small:gap-8`}>
      <div className="bg-darkOrange text-white w-full flex flex-col p-6 small:p-14 items-center rounded-2xl small:rounded-3xl relative z-0 ">
        <img
          src="/flower.png"
          alt="flower"
          className="w-14 small:w-26 absolute top-28 small:top-6 right-5 small:right-32"
        />
        <div className="flex flex-col gap10 max-w-xl items-center gap-10">
          <h1 className="text-3xl small:text-5xl font-semibold font-averia text-center leading-tight">
            Find Scholarships across Western Australia
          </h1>

          <SearchScholarship />
        </div>
      </div>

      <div className="flex flex-col small:flex-row w-full justify-between items-center px-8 font-nunito">
        <h2 className="text-2xl small:text-3xl font-bold">Scholarship results</h2>
        <div className="flex gap-2">
          <BasicSelect width={40}/>
          <BasicSelect width={40}/>
        </div>
      </div>

      <Results />
    </main>
  );
};

export default ScholarshipsTemplate;
