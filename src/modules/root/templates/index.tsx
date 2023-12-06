import Link from "next/link";
import React from "react";

const RootTemplate = () => {
  return (
    <div className="w-full p-10 items-center flex flex-col gap-10">
      <h1 className="text-xl small:text-3xl font-bold">***** LANDING PAGE HERE *****</h1>
      <Link href="/register/step-one">
        <h2 className="px-8 py-3 bg-darkGreen text-white text-xl font-semibold rounded-3xl shadow shadow-neutral-200 hover:bg-green2">
          Register
        </h2>
      </Link>
    </div>
  );
};

export default RootTemplate;
