/* eslint-disable @next/next/no-img-element */
import { PATHWAYS } from "@/constants";
import { useContext, FC } from "react";
import {
  PathwayContext,
  PathwayContextProps,
} from "@/lib/context/pathway-context";

interface SelectorProps {
  // If props are needed, define them here
}

const PathwaySelector: FC<SelectorProps> = () => {
  const contextValue = useContext(PathwayContext) as PathwayContextProps;

  const { selectedPathway, handlePathwayClick } = contextValue;

  return (
    <div className="flex justify-center gap-8">
      {PATHWAYS.map((pathway) => (
        <div
          key={pathway.id}
          className="border border-white p-5 flex items-center bg-white rounded-2xl shadow-md shadow-neutral-200 gap-4 hover:cursor-pointer"
          style={{
            borderColor:
              selectedPathway?.id === pathway.id ? pathway.color : "",
            color: selectedPathway?.id === pathway.id ? pathway.color : "",
          }}
          onClick={() => handlePathwayClick(pathway)}
        >
          <img src={pathway.icon} alt={pathway.title} />
          <h2 className="text-lg tracking-wider">{pathway.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PathwaySelector;