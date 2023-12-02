/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useContext } from "react";
import {
  PathwayContext,
  PathwayContextProps,
} from "@/lib/context/pathway-context";

const Selection: React.FC = () => {
  const { selectedPathway } = useContext(PathwayContext) as PathwayContextProps;

  if (!selectedPathway) {
    return <div>No pathway selected</div>;
  }

  return (
    <div className="p-10 flex items-start gap-10 bg-white rounded-2xl shadow-md shadow-neutral-200">
      <div className="flex flex-col max-w-xs gap-8 items-start">
        <div className="flex gap-4 items-center">
          <img src={selectedPathway.icon} alt={selectedPathway.title} />
          <h2 className="text-xl font-bold tracking-wider">
            {selectedPathway.subtitle}
          </h2>
        </div>
        <p className="leading-relaxed text-neutral-700">
          {selectedPathway.description}
        </p>
        <button
          className="font-semibold hover:underline"
          style={{
            color: selectedPathway?.color,
          }}
        >
          Learn more
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <h3
          className=" font-semibold text-lg"
          style={{
            color: selectedPathway?.color,
          }}
        >
          Relevant Resources
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center border border-neutral-300 rounded-2xl p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p className="pr-10">{selectedPathway.features[0]}</p>
          </div>
          <div className="flex gap-4 items-center border border-neutral-300 rounded-2xl p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p>{selectedPathway.features[1]}</p>
          </div>
          <div className="flex gap-4 items-center border border-neutral-300 rounded-2xl p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p>{selectedPathway.features[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
