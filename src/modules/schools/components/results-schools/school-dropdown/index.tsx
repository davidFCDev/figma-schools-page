import { SchoolProps } from "@/types";
import React from "react";

const SchoolDropdown: React.FC<{ school: SchoolProps }> = ({ school }) => {
  return (
    <div className="w-full rounded-3xl border-t border-neutral-200 shadow-b-xs shadow-neutral-200 flex flex-col px-8 py-6">
      <p className="text-base font-light">{school.description}</p>
    </div>
  );
};

export default SchoolDropdown;
