/* eslint-disable @next/next/no-img-element */
import React from "react";
import StepTitle from "../step-title";

const GreenAside = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-col gap-16 small:gap-24 screen relative text-white bg-green min-h-screen p-6 small:p-12 overflow-hidden shadow shadow-green">
      <img src="/logo-edufy.png" alt="logo" className="w-52" />
      <img
        src="/points.png"
        alt="points"
        className="absolute -top-12 -right-10"
      />
      <img
        src="/small-points.png"
        alt="small-points"
        className="absolute -bottom-10 -left-10 w-40 small:w-72"
      />

      <StepTitle img={img} />
    </div>
  );
};

export default GreenAside;
