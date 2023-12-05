import Link from "next/link";
import React from "react";
import ProgressBar from "@/modules/common/components/progress-bar";
import { BsArrowLeft } from "react-icons/bs";

const Progress = ({
  link,
  text,
  progress,
}: {
  link: string;
  text: string;
  progress: number;
}) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between small:px-2">
        <h3 className="font-semibold text-2xl">Account set up</h3>
        <p className="font-semibold text-2xl">{text}</p>
      </div>
      <ProgressBar progress={progress} />
      <Link href={link} className="text-2xl px-2 hover:cursor-pointer">
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default Progress;
