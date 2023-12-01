import Image from "next/image";
import React from "react";

const GreenBox = () => {
  
  return (
    <div className="text-white bg-green flex px-16 py-10 rounded-3xl items-start justify-between mask">
      <div className="flex flex-col gap-5 items-start max-w-md">
        <h1 className="text-3xl font-semibold font-averia tracking-wider leading-tight">
          Get Discounts on Learning Materials
        </h1>
        <p className="text-lg text-gray font-nunito">
          20% off only for Edufy users
        </p>
        <button className="px-16 py-2 bg-darkOrange font-rubik rounded-full text-sm font-semibold border border-darkOrange hover:bg-orange">
          Get Now
        </button>
      </div>
      <Image
        src="/sun.png"
        alt="sun"
        width={170}
        height={170}
        className="mr-32"
      />
    </div>
  );
};

export default GreenBox;
