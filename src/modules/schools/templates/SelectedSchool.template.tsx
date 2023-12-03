"use client";
/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";
import Link from "next/link";
import { useContext} from "react";
import SchoolHeader from "../components/header-school";
import Affiliation from "../components/affiliation";
import Selector from "../components/selector";
import { PiCheck } from "react-icons/pi";
import Admissions from "../components/admissions";
import AboutBox from "../components/about-box";
import ProgramsOfferings from "../components/programs-offerings";
import EnrollmentsPerformance from "../components/enrollments-performance";
import { SchoolSelectedContext } from "@/lib/context/school-selected.context";

const SelectedSchoolTemplate = () => {

  const context = useContext(SchoolSelectedContext);

  if (!context) {
    return <div>No context provider found</div>;
  }

  const { selectedSchool, selectedComponent } = context;

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
    <main className={`${style.page} flex flex-col gap-6 items-start`}>
      <div className="flex flex-col gap-5">
        <SchoolHeader selectedSchool={selectedSchool} />

        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-5 w-[300%]">
            <img src={selectedSchool.map} alt="map" className="w-full" />

            <Selector />
          </div>

          <div className="flex flex-col justify-between">
            <AboutBox selectedSchool={selectedSchool} />

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
      </div>

      <>
        {selectedComponent === "enrollmentPerformance" && (
          <EnrollmentsPerformance selectedSchool={selectedSchool} />
        )}
        {selectedComponent === "programsOfferings" && (
          <ProgramsOfferings selectedSchool={selectedSchool} />
        )}
        {selectedComponent === "admissions" && (
          <Admissions selectedSchool={selectedSchool} />
        )}
      </>
    </main>
  );
};

export default SelectedSchoolTemplate;
