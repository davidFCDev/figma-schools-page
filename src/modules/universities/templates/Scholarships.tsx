"use client";
import BasicSelect from "@/modules/common/components/select";
import { style } from "@/style";
import UniversityResults from "../components/results";

const ScholarshipsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8 font-averia`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">University Scholarships</h2>
        <div className="flex flex-wrap justify-center items-center w-full">
          {Array.from({ length: 11 }).map((_, i) => (
            <BasicSelect key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col px-2 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold pt-4">Scholarship results</h2>
          <BasicSelect label="Newest First" />
        </div>

          <UniversityResults />

      </div>
    </main>
  );
};

export default ScholarshipsTemplate;
