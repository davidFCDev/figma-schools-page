"use client";
import { BsArrowLeft } from "react-icons/bs";
import ProgressBar from "@/modules/common/components/progress-bar";
import Title from "../components/title";
import { style } from "@/style";
import FormStepTwo from "../components/form";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const StepTwoTemplate = () => {
  return (
    <div className="w-full font-outfit flex flex-col small:flex-row">
      <div className="flex flex-col gap-24 screen relative text-white bg-green min-h-screen p-12 overflow-hidden shadow shadow-green">
        <img src="/logo-edufy.png" alt="logo" className="w-52" />
        <img
          src="/points.png"
          alt="points"
          className="absolute -top-12 -right-10"
        />
        <img
          src="/small-points.png"
          alt="small-points"
          className="absolute -bottom-10 -left-10 w-72"
        />

        <Title />
      </div>

      <div className="p-12 w-full flex flex-col gap-10 items-center bg-gray">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between px-2">
            <h3 className="font-semibold text-2xl">Account set up</h3>
            <p className="font-semibold text-2xl">2/3</p>
          </div>
          <ProgressBar progress={66} />
          <Link href={'/step-one-two'} className="text-2xl px-2">
            <BsArrowLeft />
          </Link>
        </div>

        <div className="flex flex-col gap-5 w-4/6 items-start">
          <h2 className={`${style.title}`}>Tell us a bit about you</h2>
          <p className={`${style.subtitle}`}>
          Just the absolute minimal
          </p>
          <FormStepTwo />
        </div>
      </div>
    </div>
  );
};

export default StepTwoTemplate;
