"use client";
import { ROUTES } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import SpecialButton from "@/modules/common/components/special-button";

const Routes = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-4 items-start">
      {ROUTES.map((route, index) => (
        <Link
          href={route.path}
          key={index}
          className={`flex items-center gap-4 font-semibold ${
            currentPath === route.path
              ? "bg-darkOrange text-white"
              : "bg-white text-green"
          } px-2 py-2 rounded-full w-full`}
        >
          <span
            className={`text-2xl rounded-full p-2 ${
              currentPath === route.path ? "bg-white text-darkOrange" : ""
            }`}
          >
            {route.icon}
          </span>
          <h3 className="text-base hover:scale-105 transform transition-all">{route.name}</h3>
        </Link>
      ))}
      <div className="pl-5">
        <SpecialButton text="SchoolMatch" />
      </div>
    </div>
  );
};

export default Routes;
