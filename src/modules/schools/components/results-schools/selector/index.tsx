/* eslint-disable @next/next/no-img-element */
import { LightTooltip } from "@/modules/common/components/tooltip";
import { Fade } from "@mui/material";

const Selector = () => {
  return (
    <div className="flex items-center gap-2 text-base text-neutral-500 font-semibold w-full justify-between">
      <LightTooltip title="Check the enrollment & performance" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200">
          <img src="/icons/chart-icon.png" alt="chart" />
          <span>Enrollment & Performance</span>
        </div>
      </LightTooltip>
      <LightTooltip title="Look the programs & offerings" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200">
          <img src="/icons/list2-icon.png" alt="list2" />
          <span>Programs & Offerings</span>
        </div>
      </LightTooltip>
      <LightTooltip title="Contemplate the admissions" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-5 bg-white rounded-2xl shadow-sm shadow-neutral-200">
          <img src="/icons/balance-icon.png" alt="balance" />
          <span>Admissions</span>
        </div>
      </LightTooltip>
    </div>
  );
};

export default Selector;
