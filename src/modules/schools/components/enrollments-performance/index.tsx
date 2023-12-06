import React from "react";
import Icsea from "../icsea";
import TotalEnrollments from "../total-enrollments";
import YearRange from "../year-range";
import MedianScore from "../median-score";
import { SchoolProps } from "@/types";

const EnrollmentsPerformance = ({
  selectedSchool,
}: {
  selectedSchool: SchoolProps;
}) => {
  return (
    <div className="w-full flex flex-col small:flex-row gap-5">
      <div className="w-full flex flex-col gap-5">
        <Icsea selectedSchool={selectedSchool} />

        <div className="w-full flex gap-4">
          <TotalEnrollments selectedSchool={selectedSchool} />

          <YearRange selectedSchool={selectedSchool} />
        </div>
      </div>

      <MedianScore selectedSchool={selectedSchool} />
    </div>
  );
};

export default EnrollmentsPerformance;
