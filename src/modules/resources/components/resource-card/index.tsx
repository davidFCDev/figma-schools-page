/* eslint-disable @next/next/no-img-element */
import { PopularResourcesProps } from "@/types";
import React from "react";

const ResourceCard = ({ resource }: { resource: PopularResourcesProps }) => {
  return (
    <div
      key={resource.id}
      className="flex flex-col items-center w-80 rounded-2xl bg-white shadow shadow-neutral-200"
    >
      <img
        src={resource.image}
        alt={resource.title}
        className="w-full rounded-t-2xl"
      />

      <div className="flex flex-col p-5 gap-6 relative">
        <div className="flex flex-col gap-3 pt-5">
          <span className="text-xs">1 - {resource.date}</span>
          <h3 className="font-bold text-lg text-darkGreen">{resource.title}</h3>
        </div>

        <p className="text-xs leading-normal">{resource.description}</p>

        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <p className="font-bold text-darkOrange text-xl">
              $ {resource.after}
            </p>
            <p className="font-semibold text-neutral-400 text-lg line-through">
              $ {resource.before}
            </p>
          </div>
          <button className="px-5 py-2 bg-darkGreen text-white shadow rounded-lg text-sm hover:bg-green">
            Check Out
          </button>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex items-center gap-1 bg-gray rounded-full px-2 py-1 absolute z-10 border border-neutral-200 -top-5">
            <img src={resource.avatars} alt="avatar-group" />
            <p>+ {resource.students} students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
