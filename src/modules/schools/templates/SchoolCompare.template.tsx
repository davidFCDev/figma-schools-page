"use client";
/* eslint-disable @next/next/no-img-element */

import { style } from "@/style";
import CompareTable from "../components/compare-table";
import { useState } from "react";

const SchoolCompareTemplate = () => {

  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <CompareTable />

      <div className="w-screen h-screen absolute">

      </div>
    </main>
  );
};

export default SchoolCompareTemplate;
