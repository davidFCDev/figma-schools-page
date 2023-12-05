/* eslint-disable @next/next/no-img-element */
import { PATHWAYS } from "@/constants";
import { useContext, FC } from "react";
import {
  PathwayContext,
  PathwayContextProps,
} from "@/lib/context/pathway-context";

interface SelectorProps {}

const PathwaySelector: FC<SelectorProps> = () => {
  const contextValue = useContext(PathwayContext) as PathwayContextProps;

  const { selectedPathway, handlePathwayClick } = contextValue;

  return (
    <div className="flex flex-wrap small:flex-nowrap justify-center gap-3 small:gap-8">
      {PATHWAYS.map((pathway) => (
        <div
          key={pathway.id}
          className="border border-white p-4 small:p-5 flex items-center bg-white rounded-2xl shadow-md shadow-neutral-200 gap-2 small:gap-4 hover:cursor-pointer"
          style={{
            borderColor:
              selectedPathway?.id === pathway.id ? pathway.color : "",
            color: selectedPathway?.id === pathway.id ? pathway.color : "",
          }}
          onClick={() => handlePathwayClick(pathway)}
        >
          <img
            src={pathway.icon}
            alt={pathway.title}
            className="w-7 small:w-12"
          />
          <h2 className="text-sm small:text-lg tracking-wider font-semibold">
            {pathway.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PathwaySelector;
