"use client";
import { ROUTES } from "@/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import SpecialSmallButton from "@/modules/common/components/special-small-button";

const Routes = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-3 small:gap-4 items-start">
      {ROUTES.map((route, index) => (
        <Link
          href={route.path}
          key={index}
          className={`flex items-center gap-3 small:gap-4 font-semibold ${
            currentPath === route.path || currentPath.startsWith(route.path)
              ? "bg-darkOrange text-white"
              : "bg-white text-green"
          } px-1 small:px-2 py-1 small:py-2 rounded-full w-full`}
        >
          <span
            className={`text-xl small:text-2xl rounded-full p-1 small:p-2 ${
              currentPath === route.path || currentPath.startsWith(route.path)
                ? "bg-white text-darkOrange"
                : ""
            }`}
          >
            {route.icon}
          </span>
          <h3 className="text-sm small:text-base hover:scale-105 transform transition-all">{route.name}</h3>
        </Link>
      ))}
      <Link href={"/dashboard/schoolmatch"} className="pl-3 small:pl-6">
        <SpecialSmallButton text="SchoolMatch" css="px-8 py-1 small:py-2"/>
      </Link>
    </div>
  );
};


export default Routes;
