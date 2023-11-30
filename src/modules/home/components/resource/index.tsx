/* eslint-disable @next/next/no-img-element */
import { ResourceProps } from "@/types";
import React from "react";

const Resource: React.FC<ResourceProps> = ({
  color,
  mask1,
  mask2,
  title,
  subtitle,
  icon,
}) => {
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
  const shadowClass = getShadowClass(color);

  return (
    <div
      className={`rounded-2xl px-6 py-4 flex justify-between h-48 text-white relative shadow-sm ${shadowClass} hover:scale-105 transform transition-all hover:cursor-pointer`}
    >
      <img src={mask1} alt="mask" className="absolute bottom-0 right-0" />
      <img src={mask2} alt="mask" className="absolute top-0 left-0" />
      <div className="flex flex-col gap-1 z-20">
        <h3 className="text-xl font-semibold tracking-wider">{title}</h3>
        <p className="text-sm font-light">{subtitle}</p>
      </div>
      <div className="flex items-end">
        <img src={icon} alt="clock" className="w-20 z-20" />
      </div>
    </div>
  );
};

export default Resource;
