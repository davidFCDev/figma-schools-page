/* eslint-disable @next/next/no-img-element */
import { UNIVERSITY_SCHOLARSHIPS } from "@/constants";
import { useState } from "react";
import TitleDropdown from "./title-dropdown";
import TitleResults from "./title-results";

interface ResultsProps {}

const UniversityResults: React.FC<ResultsProps> = () => {
  const [selectedScholarship, setSelectedScholarship] = useState<number | null>(
    UNIVERSITY_SCHOLARSHIPS.length > 0 ? UNIVERSITY_SCHOLARSHIPS[0].id : null
  );

  const handleScholarshipClick = (scholarshipId: number) => {
    setSelectedScholarship(
      selectedScholarship === scholarshipId ? null : scholarshipId
    );
  };

  return (
    <div className="w-full flex flex-col gap-10 justify-center p-3 bg-white rounded-2xl small:rounded-3xl font-averia text-lg font-semibold ">
      {UNIVERSITY_SCHOLARSHIPS.map((scholarship) => (
        <div
          key={scholarship.id}
          className="bg-gray border border-neutral-200 rounded-2xl small:rounded-3xl px-4 py-6 flex flex-col gap-8"
        >
          <TitleResults
            selectedScholarship={selectedScholarship}
            scholarship={scholarship}
            onSelect={handleScholarshipClick}
          />

          {selectedScholarship === scholarship.id && (
            <TitleDropdown scholarship={scholarship} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UniversityResults;
