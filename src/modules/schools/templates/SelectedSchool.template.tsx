"use client";
/* eslint-disable @next/next/no-img-element */

import { SCHOOLS } from "@/constants/schools";
import { style } from "@/style";
import { SchoolProps } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SchoolHeader from "../components/results-schools/header-school";
import Affiliation from "../components/results-schools/affiliation";
import Selector from "../components/results-schools/selector";
import { PiCheck } from "react-icons/pi";

const SelectedSchoolTemplate = () => {
  const { id } = useParams();
  const [selectedSchool, setSelectedSchool] = useState<SchoolProps | null>(
    null
  );

  useEffect(() => {
    const school = SCHOOLS.find((school) => school.id === Number(id));

    if (school) {
      setSelectedSchool(school);
    } else {
      console.error(`School not found with id: ${id}`);
    }
  }, [id]);

  if (!selectedSchool) {
    return (
      <main className={`${style.page} flex flex-col gap-8 items-center `}>
        <div className="p-5 bg-white shadow shadow-neutral-200 items-center flex flex-col gap-10 rounded-3xl">
          <h3 className="text-avaria font-semibold text-xl ">
            Sorry, we couldn’t find the school you’re looking for.
          </h3>
          <Link href="/dashboard/schools">
            <span className="underline">Back to Schools</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`${style.page} flex flex-col gap-5 items-start`}>
      <SchoolHeader selectedSchool={selectedSchool} />

      <div className="flex justify-between gap-5 w-full">
        <div className="flex flex-col gap-5 w-[280%]">
          <img src={selectedSchool.map} alt="map" className="w-full" />
          <Selector />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-5 p-5 bg-white rounded-3xl border border-neutral-200">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold tracking-wide pl-6">About</h3>
              <button className="text-darkGreen font-bold shadow shadow-neutral-300 px-5 py-1 rounded-xl">
                Visit Website
              </button>
            </div>
            <p className="font-normal">{selectedSchool.about}</p>
          </div>

          <Affiliation selectedSchool={selectedSchool} />

          <div className="flex justify-between bg-white rounded-3xl items-start p-5 border border-neutral-200">
            {selectedSchool.checks.map((check, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 font-semibold items-center text-center px-4"
              >
                <div className="text-2xl">
                  <PiCheck />
                </div>
                <span className="text-sm">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>List Title</h2>
          {selectedSchool.programs.map((item, index) => (
            <div key={index} className="flex gap-5 items-center">
              <div style={{ backgroundColor: item.subcolor }}>
                <img src={item.icon} alt="list-icon" className="" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-sm">{item.date}</span>
              </div>
              <span>{item.type}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SelectedSchoolTemplate;
