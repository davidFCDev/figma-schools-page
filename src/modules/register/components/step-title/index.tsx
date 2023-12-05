/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import React from "react";

const StepTitle = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-col items-center gap-10 pb-36 small:pb-64">
      <div className="flex flex-col gap-5">
        <h2 className={`${style.title}`}>
          The first and only step you’ll have to make
        </h2>
        <p className={`${style.subtitle}`}>
          We won’t spam your email, we’ll only use it for whats necessary.
        </p>
      </div>
      <img src={img} alt="star" className="w-52 small:w-72" />
    </div>
  );
};

export default StepTitle;
