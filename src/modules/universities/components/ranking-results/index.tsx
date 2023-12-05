/* eslint-disable @next/next/no-img-element */
import SpecialButton from "@/modules/common/components/special-button";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { PiBuildings } from "react-icons/pi";
import { UNIVERSITY_RANKINGS as rankings } from "@/constants";
import SpecialSmallButton from "@/modules/common/components/special-small-button";

const RankingResults = () => {
  return (
    <>
      {rankings.map((item) => (
        <div
          key={item.id}
          className="flex flex-col small:flex-row gap-5 small:gap-0 justify-between bg-white rounded-2xl small:rounded-3xl p-5 font-averia shadow shadow-neutral-200 border border-neutral-200"
        >
          <div className="flex gap-10 items-center small:items-start">
            <img
              src={item.logo}
              alt={item.title}
              className="w-10 small:w-40 hidden small:block"
            />

            <div className="flex flex-col gap-5 items-center small:items-start">
              <div className="flex items-center gap-5 small:gap-0">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-10 small:w-40 block small:hidden"
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs py-1 px-3 small:py-2 small:px-4 rounded-xl small:rounded-3xl bg-white border border-neutral-200">
                  <span>Global Ranking: </span>
                  <strong>#{item.global}</strong>
                </div>
                <div className="text-xs py-1 px-3 small:py-2 small:px-4 rounded-xl small:rounded-3xl bg-white border border-neutral-200">
                  <span>Other Ranking: </span>
                  <strong>#{item.other}</strong>
                </div>
                <div className="text-xs py-1 px-3 small:py-2 small:px-4 rounded-xl small:rounded-3xl bg-white border border-neutral-200">
                  <span>Other Ranking: </span>
                  <strong>#{item.other2}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="py-1 px-3 small:py-2 small:px-4 rounded-xl small:rounded-3xl bg-white border border-neutral-200 flex gap-2 items-center">
                  <div>
                    <IoLocationOutline />
                  </div>
                  <span className="text-sm small:text-base">{item.ubication}</span>
                </div>
                <div className="py-1 px-3 small:py-2 small:px-4 rounded-xl small:rounded-3xl bg-white border border-neutral-200 flex gap-2 items-center">
                  <div>
                    <PiBuildings />
                  </div>
                  <span className="text-sm small:text-base">{item.status}</span>
                </div>
              </div>
            </div>
          </div>
          <Link href={item.link} className="flex small:items-end justify-center small:justify-normal">
            <SpecialSmallButton
              text="Visit Website"
              css="px-3 small:px-5 py-1 small:py-2"
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default RankingResults;
