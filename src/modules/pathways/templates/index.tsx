"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import PathwaySelector from "../components/pathway-selector";
import OptionSelected from "../components/option-selected";
import { useContext } from "react";
import { PathwayContext } from "@/lib/context/pathway-context";

const PathwaysTemplate = () => {
  const pathwayContext = useContext(PathwayContext);

  const { selectedPathway } = pathwayContext || {};

  return (
    <main className={`${style.page} flex flex-col gap-10`}>
      <PathwaySelector />

      {selectedPathway && <OptionSelected />}
    </main>
  );
};

export default PathwaysTemplate;
