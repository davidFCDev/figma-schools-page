import { SchoolProps } from "@/types";
import React from "react";
import { PiGenderFemale, PiGenderIntersex, PiGenderMale } from "react-icons/pi";

export function GenderIcon({
  selectedSchool,
}: {
  selectedSchool: SchoolProps;
}) {
  if (
    selectedSchool.gender === "Girls" ||
    selectedSchool.admissions.gender === "Girls" ||
    selectedSchool.gender_2 === "Female"
  ) {
    return <PiGenderFemale />;
  } else if (
    selectedSchool.gender === "Boys" ||
    selectedSchool.admissions.gender === "Boys" ||
    selectedSchool.gender_2 === "Male"
  ) {
    return <PiGenderMale />;
  } else {
    return <PiGenderIntersex />;
  }
}
