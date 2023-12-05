/* eslint-disable @next/next/no-img-element */
"use client";

import GreenAside from "../components/green-aside";
import Progress from "../components/step-progress";
import StepOneForm from "../components/step-one-form";

const StepOneTemplate = () => {
  return (
    <div className="w-full font-outfit flex flex-col small:flex-row">
      <GreenAside img={"/star.png"} />

      <div className="p-6 small:p-12 w-full flex flex-col gap-10 items-center bg-gray">
        <Progress link="/" text="1/3" progress={33} />

        <StepOneForm />
      </div>
    </div>
  );
};

export default StepOneTemplate;
