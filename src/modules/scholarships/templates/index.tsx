"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import BasicSelect from "../components/select";
import { SCHOLARSHIPS } from "@/constants";
import { PiTrophy } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";
import SpecialButton from "@/modules/common/components/special-button";
import { IoHandLeftOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";

const ScholarshipsTemplate = () => {
  const [toggleList, setToggleList] = useState(false);

  const handleList = () => {
    setToggleList(!toggleList);
  };

  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <div className="bg-darkOrange text-white w-full flex flex-col p-14 items-center rounded-3xl relative z-0 ">
        <img
          src="/flower.png"
          alt="flower"
          className="w-26 absolute top-6 right-40"
        />
        <div className="flex flex-col gap10 max-w-xl items-center gap-10">
          <h1 className="text-5xl font-semibold font-averia text-center leading-tight">
            Find Scholarships across Western Australia
          </h1>

          <div className="flex flex-col w-3/4 relative items-center">
            <label
              className={`${
                toggleList ? "rounded-t-3xl" : "rounded-3xl"
              } flex bg-white text-neutral-700 items-center justify-start w-full`}
            >
              <div className="text-2xl pl-4">
                <RiSearchLine />
              </div>
              <input
                type="text"
                placeholder="Search scholarship"
                className="px-4 py-3 w-full outline-none focus:outline-none rounded-3xl"
                onClick={handleList}
              />
            </label>

            {toggleList && (
              <hr className="border w-11/12 border-neutral-100 z-20 items-center" />
            )}

            {toggleList && (
              <div className="absolute w-full flex bg-white text-neutral-700 items-center rounded-b-3xl px-4 py-4 top-10">
                <ul className="flex flex-col gap-2">
                  <li>Searching...</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between items-center px-8 font-nunito">
        <h2 className="text-3xl font-semibold">Scholarship results</h2>
        <div className="flex gap-2">
          <BasicSelect />
          <BasicSelect />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 justify-center p-3 bg-white rounded-3xl font-averia text-lg font-semibold ">
        {SCHOLARSHIPS.map((scholarship) => (
          <div key={scholarship.id} className="bg-gray rounded-3xl px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <span>{scholarship.id}</span>
                <img src={scholarship.logo} alt={scholarship.name} />
                <h3 className="max-w-[250px]">{scholarship.name}</h3>
              </div>

              <div className="flex gap-5 items-center">
                <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200">
                  <div className="text-2xl">
                    <PiTrophy />
                  </div>
                  <span>${scholarship.price}</span>
                </div>

                <div className="flex gap-3 items-center p-4 bg-white rounded-3xl">
                  <div className="text-2xl">
                    <LuClock3 />
                  </div>
                  <span>{scholarship.date}</span>
                </div>

                <SpecialButton text="Apply" />

                <div>
                  <SlArrowDown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ScholarshipsTemplate;
