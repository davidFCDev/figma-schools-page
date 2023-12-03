"use client";
/* eslint-disable @next/next/no-img-element */

import { SCHOOLS } from "@/constants/schools";
import { style } from "@/style";
import { SchoolProps } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SchoolHeader from "../components/header-school";
import Affiliation from "../components/affiliation";
import Selector from "../components/selector";
import { PiCheck } from "react-icons/pi";
import Admissions from "../components/admissions";
import AboutBox from "../components/about-box";
import { LightTooltip } from "@/modules/common/components/tooltip";
import { Fade } from "@mui/material";
import ProgramsOfferings from "../components/programs-offerings";
import EnrollmentsPerformance from "../components/enrollments-performance";

const SelectedSchoolTemplate = () => {
  const { id } = useParams();
  const [selectedSchool, setSelectedSchool] = useState<SchoolProps | null>(
    null
  );
  const [selectedComponent, setSelectedComponent] =
    useState<string>("programsOfferings");

  const handleSelectComponent = (component: string) => {
    setSelectedComponent(component);
  };

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
    <main className={`${style.page} flex flex-col gap-12 items-start`}>
      <div className="flex flex-col gap-5">
        <SchoolHeader selectedSchool={selectedSchool} />

        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-5 w-[280%]">
            <img src={selectedSchool.map} alt="map" className="w-full" />
            <div className="flex items-center gap-2 text-base text-neutral-500 font-semibold w-full justify-between">
              <LightTooltip
                title="Check the enrollment & performance"
                arrow
                TransitionComponent={Fade}
                onClick={() => handleSelectComponent("enrollmentPerformance")}
              >
                <div
                  className={`${
                    selectedComponent === "enrollmentPerformance" &&
                    "border-2 border-green2 text-green2"
                  } flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
                >
                  <img src="/icons/chart-icon.png" alt="chart" />
                  <span>Enrollment & Performance</span>
                </div>
              </LightTooltip>
              <LightTooltip
                title="Look the programs & offerings"
                arrow
                TransitionComponent={Fade}
                onClick={() => handleSelectComponent("programsOfferings")}
              >
                <div
                  className={`${
                    selectedComponent === "programsOfferings" &&
                    "border-2 border-green2 text-green2"
                  } flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
                >
                  <img src="/icons/list2-icon.png" alt="list2" />
                  <span>Programs & Offerings</span>
                </div>
              </LightTooltip>
              <LightTooltip
                title="Contemplate the admissions"
                arrow
                TransitionComponent={Fade}
                onClick={() => handleSelectComponent("admissions")}
              >
                <div
                  className={`${
                    selectedComponent === "admissions" &&
                    "border-2 border-green2 text-green2"
                  } flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
                >
                  <img src="/icons/balance-icon.png" alt="balance" />
                  <span>Admissions</span>
                </div>
              </LightTooltip>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <AboutBox selectedSchool={selectedSchool} />

            <Affiliation selectedSchool={selectedSchool} />

            <div className="flex justify-between bg-white rounded-3xl items-start p-5 border border-neutral-200">
              {/* Selector */}
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

      {selectedComponent === "enrollmentPerformance" && (
        <EnrollmentsPerformance selectedSchool={selectedSchool} />
      )}
      {selectedComponent === "programsOfferings" && (
        <ProgramsOfferings selectedSchool={selectedSchool} />
      )}
      {selectedComponent === "admissions" && (
        <Admissions selectedSchool={selectedSchool} />
      )}
    </main>
  );
};

export default SelectedSchoolTemplate;
