/* eslint-disable @next/next/no-img-element */
import React from "react";

const GreenBox = () => {
  return (
    <div className="text-white bg-green flex px-6 small:px-16 py-5 small:py-10 rounded-2xl small:rounded-3xl items-start justify-between mask relative w-full">
      <div className="flex flex-col gap-5 items-start small:max-w-md z-10">
        <h1 className="text-3xl font-semibold font-averia tracking-wider leading-tight">
          Get Discounts on Learning Materials
        </h1>
        <p className="text-base small:text-lg text-gray font-nunito">
          20% off only for Edufy users
        </p>
        <button className="px-12 small:px-16 py-1 small:py-2 bg-darkOrange font-rubik rounded-full text-sm font-semibold border border-darkOrange hover:bg-orange">
          Get Now
        </button>
      </div>
      <img src="/sun.png" alt="sun" className="mr-32 w-44 hidden small:block" />

      <img
        src="/sun.png"
        alt="sun"
        className="w-16 small:w-44 block small:hidden absolute z-0 right-5 top-20"
      />
    </div>
  );
};

export default GreenBox;
