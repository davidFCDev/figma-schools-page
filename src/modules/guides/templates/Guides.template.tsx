"use client";
import { style } from "@/style";
import { useContext } from "react";
import TestSelector from "../components/test-selector";
import { TestContext } from "@/lib/context/test-context";
import TestSelected from "../components/option-selected";

const GuidesTemplate = () => {
  const testContext = useContext(TestContext);

  const { selectedTest } = testContext || {};

  return (
    <main className={`${style.page} flex flex-col gap-8 items-center`}>
      <div className="flex flex-col gap-4 small:gap-8 small:max-w-2xl max-w-xs text-center">
        <h2 className="font-semibold text-green2 font-averia uppercase tracking-wider small:px-32 text-sm small:text-base">
          learn about Test Guides for Scholarships
        </h2>

        <h1 className="text-3xl small:text-4xl font-bold font-averia">
          Navigate ACER, EDU, and AAS Tests With Confidence
        </h1>
      </div>
      <TestSelector />

      {selectedTest && <TestSelected />}
    </main>
  );
};

export default GuidesTemplate;
