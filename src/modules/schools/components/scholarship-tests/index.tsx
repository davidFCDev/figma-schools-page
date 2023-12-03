/* eslint-disable @next/next/no-img-element */
import { SchoolProps } from "@/types";
import React from "react";

const ScholarshipTests = ({
  selectedSchool,
}: {
  selectedSchool: SchoolProps;
}) => {
  return (
    <>
      {selectedSchool.admissions.scholarship_tests.map((item, index) => (
        <div
          key={index}
          className="flex bg-white rounded-2xl p-3 border border-neutral-200"
        >
          <div className="flex items-center gap-2 w-full">
            <div
              style={{ backgroundColor: item.subcolor }}
              className="p-5 rounded-xl"
            >
              <img src={item.icon} alt="list-icon" className="" />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <div className="flex justify-between">
                <span className="text-xs">{item.date}</span>
                <span
                  className="text-xs py-1 px-2 rounded-lg"
                  style={{
                    color: item.color,
                    backgroundColor: item.subcolor,
                  }}
                >
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScholarshipTests;
