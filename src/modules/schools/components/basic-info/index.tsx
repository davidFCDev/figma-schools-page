import { LightTooltip } from "@/modules/common/components/tooltip";
import { SchoolProps } from "@/types";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { PiBuildings, PiCertificate } from "react-icons/pi";
import { Fade } from "@mui/material";
import { GenderIcon } from "../gender-icon";

const BasicSchoolInfo = ({ school }: { school: SchoolProps }) => {
  return (
    <>
      <LightTooltip title="Location" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <IoLocationOutline />
          </div>
          <span>{school.ubication}</span>
        </div>
      </LightTooltip>

      <LightTooltip title="Sector" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <PiBuildings />
          </div>
          <span>{school.type}</span>
        </div>
      </LightTooltip>

      <LightTooltip title="Median ATAR" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <PiCertificate />
          </div>
          <span>{school.atar}</span>
        </div>
      </LightTooltip>

      <LightTooltip title="Gender" arrow TransitionComponent={Fade}>
        <div className="flex gap-3 items-center p-4 bg-white rounded-3xl border border-neutral-200 shadow-xs shadow-neutral-200">
          <div className="text-2xl">
            <GenderIcon selectedSchool={school} />
          </div>
          <span>{school.gender}</span>
        </div>
      </LightTooltip>
    </>
  );
};

export default BasicSchoolInfo;
