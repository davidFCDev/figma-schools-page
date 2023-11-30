"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import Selector from "../components/selector";
import Selection from "../components/selection";
import { useContext } from "react";
import { PathwayContext } from "@/lib/context/pathway-context";

const PathwaysTemplate = () => {

  const pathwayContext = useContext(PathwayContext);

  const { selectedPathway } = pathwayContext || {};

  return (
    <main className={`${style.page} flex flex-col gap-10`}>
      <Selector />

      {selectedPathway && <Selection />}
    </main>
  );
};

export default PathwaysTemplate;
