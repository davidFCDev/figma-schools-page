/* eslint-disable @next/next/no-img-element */

import { SCHOOLS } from "@/constants/schools";
import SchoolDropdown from "../school-dropdown";
import { ReactNode, useState } from "react";
import School from "../school";

interface ResultsProps {
  icon: ReactNode;
}

const SchoolResults: React.FC<ResultsProps> = ({icon}) => {
  const [selectedSchool, setSelectedSchool] = useState<number | null>(
    SCHOOLS.length > 0 ? SCHOOLS[0].id : null
  );

  const handleSchoolSelect = (schoolId: number) => {
    setSelectedSchool(selectedSchool === schoolId ? null : schoolId);
  };

  return (
    <div className="w-full flex flex-col gap-10 justify-center p-3 bg-white rounded-3xl font-averia text-lg font-semibold ">
      {SCHOOLS.map((school) => (
        <div
          key={school.id}
          className="bg-gray border border-neutral-200 rounded-3xl px-4 py-6 flex flex-col gap-8"
        >
          <School
            selectedSchool={selectedSchool}
            school={school}
            onSelect={handleSchoolSelect}
            icon={icon}
          />

          {selectedSchool === school.id && <SchoolDropdown school={school} />}
        </div>
      ))}
    </div>
  );
};

export default SchoolResults;
