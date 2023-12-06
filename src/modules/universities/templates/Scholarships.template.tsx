"use client";
import BasicSelect from "@/modules/common/components/select";
import { style } from "@/style";
import UniversityResults from "../components/scholarships-results/scholarship";

const ScholarshipsTemplate = () => {
  return (
    <main
      className={`${style.page} flex flex-col gap-8 font-averia items-center`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center small:text-left max-w-sm">
          University Scholarships
        </h2>

        {/* Desktop */}
        <div className="justify-center items-center w-full hidden small:flex flex-wrap gap-x-3">
          {Array.from({ length: 11 }).map((_, i) => (
            <BasicSelect key={i} />
          ))}
        </div>

        {/* Responsive */}
        <div className="flex flex-wrap small:hidden justify-center items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <BasicSelect key={i} width={120} />
          ))}
        </div>
      </div>

      <div className="flex flex-col px-2 gap-4 w-full">
        <div className="flex flex-col gap-4 small:gap-0 small:flex-row justify-between items-center px-4">
          <h2 className="text-3xl font-semibold pt-4 text-center">
            Scholarship results
          </h2>
          <BasicSelect label="Newest First" />
        </div>

        <UniversityResults />
      </div>
    </main>
  );
};

export default ScholarshipsTemplate;
