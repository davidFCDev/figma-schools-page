/* eslint-disable @next/next/no-img-element */
"use client";

import GreenAside from "../components/green-aside";
import StepFourCheck from "../components/step-four-check";
import Progress from "../components/step-progress";

const StepFourTemplate = () => {
  return (
    <div className="w-full min-h-screen font-outfit flex flex-col small:flex-row">
      <div className="hidden small:flex">
        <GreenAside img={"/check.png"} />
      </div>

      <div className="p-6 small:p-12 w-full min-h-screen flex flex-col gap-10 items-center bg-gray">
        <Progress link="/register/step-three" text="3/3" progress={100} />

        <StepFourCheck />
      </div>
    </div>
  );
};

export default StepFourTemplate;
