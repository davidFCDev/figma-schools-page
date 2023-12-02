import { ScholarshipProps } from "@/types";
import React from "react";
import { HiOutlineArrowSmRight, HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineFrontHand } from "react-icons/md";
import { PiExam, PiListChecks } from "react-icons/pi";

const ScholarshipDropdown: React.FC<{ scholarship: ScholarshipProps }> = ({
  scholarship,
}) => {
  return (
    <div className="w-full rounded-3xl border-t border-neutral-200 shadow-b-xs shadow-neutral-200 flex flex-col gap-4 px-8 py-4">
      <h2 className="text-xl font-bold">Scholarship info</h2>
      <div className="flex gap-5 items-start">
        <div className="bg-white rounded-2xl py-4 flex flex-col gap-3 min-w-[220px]">
          <div className="flex gap-2 items-center text-lg font-semibold px-4">
            <PiListChecks />
            <h3>Elegibility</h3>
          </div>
          <hr className="border-neutral-200" />
          <ul className="flex flex-col gap-2 px-4 text-sm font-light">
            {scholarship.elegibility[0] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.elegibility[0]}</span>
              </li>
            )}
            {scholarship.elegibility[1] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.elegibility[1]}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="bg-white rounded-2xl py-4 flex flex-col gap-3 min-w-[220px]">
          <div className="flex gap-2 items-center text-lg font-semibold px-4">
            <MdOutlineFrontHand />
            <h3>Application Methods</h3>
          </div>
          <hr className="border-neutral-200" />
          <ul className="flex flex-col gap-2 px-4 text-sm font-light">
            {scholarship.application[0] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.application[0]}</span>
              </li>
            )}
            {scholarship.application[1] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.application[1]}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="bg-white rounded-2xl py-4 flex flex-col gap-3 min-w-[220px]">
          <div className="flex gap-2 items-center text-lg font-semibold px-4">
            <PiExam />
            <h3>Tests Required</h3>
          </div>
          <hr className="border-neutral-200" />
          <ul className="flex flex-col gap-2 px-4 text-sm font-light">
            {scholarship.tests[0] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.tests[0]}</span>
              </li>
            )}
            {scholarship.tests[1] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.tests[1]}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="bg-white rounded-2xl py-4 flex flex-col gap-3 min-w-[220px]">
          <div className="flex gap-2 items-center text-lg font-semibold px-4">
            <HiOutlineShieldCheck />
            <h3>Coverage</h3>
          </div>
          <hr className="border-neutral-200" />
          <ul className="flex flex-col gap-2 px-4 text-sm font-light">
            {scholarship.coverage[0] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.coverage[0]}</span>
              </li>
            )}
            {scholarship.coverage[1] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.coverage[1]}</span>
              </li>
            )}
            {scholarship.coverage[2] && (
              <li className="flex gap-2 items-center">
                <HiOutlineArrowSmRight />
                <span>{scholarship.coverage[2]}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDropdown;
