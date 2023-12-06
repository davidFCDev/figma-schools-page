/* eslint-disable @next/next/no-img-element */
"use client";

import GreenAside from "../components/green-aside";
import Progress from "../components/step-progress";
import StepTwoForm from "../components/step-two-form";

const StepTwoTemplate = () => {
  return (
    <div className="w-full min-h-screen font-outfit flex flex-col small:flex-row">
      <div className="hidden small:flex">
        <GreenAside img={"/heart.png"} />
      </div>

      <div className="p-6 small:p-12 w-full min-h-screen flex flex-col gap-10 items-center bg-gray">
        <Progress link="/register/step-one" text="1/3" progress={33} />

        <StepTwoForm />
      </div>
    </div>
  );
};

export default StepTwoTemplate;
