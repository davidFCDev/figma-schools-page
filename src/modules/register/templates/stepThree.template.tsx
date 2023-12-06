/* eslint-disable @next/next/no-img-element */
"use client";

import GreenAside from "../components/green-aside";
import Progress from "../components/step-progress";
import StepThreeForm from "../components/step-three-form";

const StepThreeTemplate = () => {
  return (
    <div className="w-full min-h-screen font-outfit flex flex-col small:flex-row">
      <div className="hidden small:flex">
        <GreenAside img={"/gem.png"} />
      </div>

      <div className="p-6 small:p-12 w-full min-h-screen flex flex-col gap-10 items-center bg-gray">
        <Progress link="/register/step-two" text="2/3" progress={66} />

        <StepThreeForm />
      </div>
    </div>
  );
};

export default StepThreeTemplate;
