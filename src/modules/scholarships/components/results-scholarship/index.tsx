/* eslint-disable @next/next/no-img-element */
import { SCHOLARSHIPS } from "@/constants";
import ScholarshipHeader from "./scholarship-header";
import ScholarshipDropdown from "./scholarship-dropdown";
import { useState } from "react";

interface ResultsProps {}

const Results: React.FC<ResultsProps> = () => {
  const [selectedScholarship, setSelectedScholarship] = useState<number | null>(
    SCHOLARSHIPS.length > 0 ? SCHOLARSHIPS[0].id : null
  );

  const handleScholarshipClick = (scholarshipId: number) => {
    setSelectedScholarship(
      selectedScholarship === scholarshipId ? null : scholarshipId
    );
  };

  return (
    <div className="w-full flex flex-col gap-10 justify-center p-3 bg-white rounded-3xl font-averia text-lg font-semibold ">
      {SCHOLARSHIPS.map((scholarship) => (
        <div
          key={scholarship.id}
          className="bg-gray border border-neutral-200 rounded-3xl px-3 small:px-4 py-4 small:py-6 flex flex-col gap-8"
        >
          <ScholarshipHeader
            selectedScholarship={selectedScholarship}
            scholarship={scholarship}
            onSelect={handleScholarshipClick}
          />

          {selectedScholarship === scholarship.id && (
            <ScholarshipDropdown scholarship={scholarship} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
