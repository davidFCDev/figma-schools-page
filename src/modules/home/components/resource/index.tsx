/* eslint-disable @next/next/no-img-element */
import { ResourceProps } from "@/types";
import Link from "next/link";
import React from "react";

const Resource = ({ resource }: { resource: ResourceProps }) => {
  const getShadowClass = (color: string) => {
    switch (color) {
      case "pink":
        return "shadow-pink bg-pink";
      case "yellow":
        return "shadow-yellow bg-yellow";
      case "greenLime":
        return "shadow-greenLime bg-greenLime";
      case "orange":
        return "shadow-orange bg-orange";
      case "blue":
        return "shadow-blue bg-blue";
      case "violet":
        return "shadow-violet bg-violet";
      default:
        return "shadow-sm";
    }
  };
  const shadowClass = getShadowClass(resource.color);

  return (
    <Link href={resource.link}>
      <div
        style={{
          backgroundColor: resource.color,
          boxShadow: `0px 4px 4px ${resource.color}`,
        }}
        className={`rounded-2xl px-6 py-4 flex justify-between h-48 text-white relative shadow-sm ${shadowClass} hover:scale-105 transform transition-all hover:cursor-pointer`}
      >
        <img
          src={resource.mask1}
          alt="mask"
          className="absolute bottom-0 right-0"
        />
        <img
          src={resource.mask2}
          alt="mask"
          className="absolute top-0 left-0"
        />
        <div className="flex flex-col gap-1 z-20">
          <h3 className="text-xl font-semibold tracking-wider">
            {resource.title}
          </h3>
          <p className="text-sm font-light">{resource.subtitle}</p>
        </div>
        <div className="flex items-end">
          <img src={resource.icon} alt="clock" className="w-20 z-20" />
        </div>
      </div>
    </Link>
  );
};

export default Resource;
