import BasicSlider from "@/modules/common/components/slider";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import React from "react";

const SchoolmatchFilters = () => {
  return (
    <div className="flex flex-col gap-10 border border-neutral-200 rounded-2xl bg-white px-8 py-5 w-full">
      <div className="flex flex-col gap-5 w-full">
        <h2 className="font-semibold text-2xl">Academic Preference</h2>
        <div className="px-4">
          <BasicSlider />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-5">
          <h2 className="font-semibold text-2xl">School Type</h2>
          <div className="flex items-center justify-between w-full">
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Private 🔒
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Public 🔓
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              No Preference 🤷‍♀
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-semibold text-2xl">Kid’s interests</h2>
          <div className="flex items-center justify-between w-full">
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Music 🎹
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Sports 🏀
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Science 🧪
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Acting 🤡
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Law 👨‍⚖️
            </div>
            <div className="px-7 py-3 rounded-3xl font-semibold bg-white border border-neutral-200">
              Animal Welfare 🦘
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center font-semibold text-xl">
        <SpecialSmallButton text="Start" css="px-16 py-1" />
      </div>
    </div>
  );
};

export default SchoolmatchFilters;
