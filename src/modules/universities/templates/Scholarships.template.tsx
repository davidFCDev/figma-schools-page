"use client";
import BasicSelect from "@/modules/common/components/select";
import { style } from "@/style";
import UniversityResults from "../components/scholarships-results";

const ScholarshipsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8 font-averia`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-center small:text-left">
          University Scholarships
        </h2>

        <div className="justify-center items-center w-full hidden small:flex flex-wrap gap-x-3">
          {Array.from({ length: 11 }).map((_, i) => (
            <BasicSelect key={i} />
          ))}
        </div>

        <div className="flex flex-wrap small:hidden justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
            <BasicSelect key={i} width={120}/>
          ))}
        </div>
      </div>

      <div className="flex flex-col px-2 gap-4">
        <div className="flex flex-col gap-4 small:gap-0 small:flex-row justify-between items-center">
          <h2 className="text-3xl font-semibold pt-4 text-center">Scholarship results</h2>
          <BasicSelect label="Newest First" />
        </div>

          <UniversityResults />
      </div>
    </main>
  );
};

export default ScholarshipsTemplate;
