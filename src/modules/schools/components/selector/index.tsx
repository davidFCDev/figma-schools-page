/* eslint-disable @next/next/no-img-element */
import { SchoolSelectedContext } from "@/lib/context/school-selected.context";
import { LightTooltip } from "@/modules/common/components/tooltip";
import { Fade } from "@mui/material";
import { useContext } from "react";

const Selector = () => {
  const context = useContext(SchoolSelectedContext);

  if (!context) {
    return <div>No context provider found</div>;
  }

  const { handleSelectComponent, selectedComponent } = context;

  return (
    <div className="flex flex-wrap-reverse small:flex-nowrap items-center justify-center small:justify-between gap-2 text-sm small:text-base text-neutral-500 font-semibold w-full ">
      <LightTooltip
        title="Check the enrollment & performance"
        arrow
        TransitionComponent={Fade}
      >
        <div
          className={`${
            selectedComponent === "enrollmentPerformance" &&
            "border-2 border-green2 text-green2"
          } flex gap-2 items-center p-2 small:p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
          onClick={() => handleSelectComponent("enrollmentPerformance")}
        >
          <img src="/icons/chart-icon.png" alt="chart" />
          <span>Enrollment & Performance</span>
        </div>
      </LightTooltip>
      <LightTooltip
        title="Look the programs & offerings"
        arrow
        TransitionComponent={Fade}
      >
        <div
          className={`${
            selectedComponent === "programsOfferings" &&
            "border-2 border-green2 text-green2"
          } flex gap-2 items-center p-2 small:p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
          onClick={() => handleSelectComponent("programsOfferings")}
        >
          <img src="/icons/list2-icon.png" alt="list2" />
          <span>Programs & Offerings</span>
        </div>
      </LightTooltip>
      <LightTooltip
        title="Contemplate the admissions"
        arrow
        TransitionComponent={Fade}
      >
        <div
          className={`${
            selectedComponent === "admissions" &&
            "border-2 border-green2 text-green2"
          } flex gap-2 items-center p-2 small:p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200 hover:cursor-pointer`}
          onClick={() => handleSelectComponent("admissions")}
        >
          <img src="/icons/balance-icon.png" alt="balance" />
          <span>Admissions</span>
        </div>
      </LightTooltip>
    </div>
  );
};

export default Selector;
