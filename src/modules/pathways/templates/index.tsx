"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import Selector from "../components/selector";
import Selection from "../components/selection";
import { useContext } from "react";
import { PathwayContext } from "@/lib/context/pathway-context";

const PathwaysTemplate = () => {
  // Usar el hook useContext para acceder al contexto
  const pathwayContext = useContext(PathwayContext);

  // Extraer selectedPathway del contexto
  const { selectedPathway } = pathwayContext || {};

  return (
    <main className={`${style.page} flex flex-col gap-10`}>
      <Selector />

      {selectedPathway && <Selection selectedPathway={selectedPathway} />}
    </main>
  );
};

export default PathwaysTemplate;
