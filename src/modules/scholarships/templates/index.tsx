"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import BasicSelect from "../../common/components/select";
import Results from "../components/results";
import SearchInput from "@/modules/common/components/search-input";

const ScholarshipsTemplate = () => {

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
            Find Scholarships across Western Australia
          </h1>

          <SearchInput />
        </div>
      </div>

      <div className="flex w-full justify-between items-center px-8 font-nunito">
        <h2 className="text-3xl font-bold">Scholarship results</h2>
        <div className="flex gap-2">
          <BasicSelect />
          <BasicSelect />
        </div>
      </div>

      <Results />
    </main>
  );
};

export default ScholarshipsTemplate;
