"use client";
import { PATHWAYS } from "@/constants";
import { PathwayProps } from "@/types";
import { createContext, ReactNode, useState } from "react";

export interface PathwayContextProps {
  selectedPathway: PathwayProps | null;
  handlePathwayClick: (pathway: PathwayProps) => void;
}

export const PathwayContext = createContext<PathwayContextProps | undefined>(
  undefined
);

interface PathwayProviderProps {
  children?: ReactNode;
}

export const PathwayProvider = ({ children }: PathwayProviderProps) => {
  const [selectedPathway, setSelectedPathway] = useState<PathwayProps | null>(
    PATHWAYS[1] || null
  );

  const handlePathwayClick = (pathway: PathwayProps) => {
    setSelectedPathway(pathway);
  };

  return (
    <PathwayContext.Provider
      value={{
        selectedPathway,
        handlePathwayClick,
      }}
    >
      {children}
    </PathwayContext.Provider>
  );
};
