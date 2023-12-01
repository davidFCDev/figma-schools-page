/* eslint-disable @next/next/no-img-element */
import SpecialButton from "@/modules/common/components/special-button";
import { style } from "@/style";
import Link from "next/link";
import { IoMdGlobe } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { PiBuildings } from "react-icons/pi";
import { UNIVERSITY_RANKINGS as rankings } from "@/constants";

const RankingsTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <h2 className="text-3xl font-semibold font-averia">
        University Rankings
      </h2>

      <div className="flex flex-col gap-6 px-24">
        <div className="flex w-full justify-between px-5 font-semibold">
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow border border-neutral-200 py-3 px-5">
            <span>Global Ranking</span>
            <div className="text-2xl">
              <IoMdGlobe />
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow border border-neutral-200 py-3 px-5">
            <span>Global Ranking</span>
            <div className="text-2xl">
              <IoMdGlobe />
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow border border-neutral-200 py-3 px-5">
            <span>Global Ranking</span>
            <div className="text-2xl">
              <IoMdGlobe />
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-2xl shadow border border-neutral-200 py-3 px-5">
            <span>Global Ranking</span>
            <div className="text-2xl">
              <IoMdGlobe />
            </div>
          </div>
        </div>

        {rankings.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-white rounded-3xl p-5 font-averia shadow shadow-neutral-200 border border-neutral-200"
          >
            <div className="flex gap-10">
              <img src={item.logo} alt={item.title} />

              <div className="flex flex-col gap-5 items-start">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="text-xs py-2 px-4 rounded-3xl bg-white border border-neutral-200">
                    <span>Global Ranking: </span>
                    <strong>#{item.global}</strong>
                  </div>
                  <div className="text-xs py-2 px-4 rounded-3xl bg-white border border-neutral-200">
                    <span>Other Ranking: </span>
                    <strong>#{item.other}</strong>
                  </div>
                  <div className="text-xs py-2 px-4 rounded-3xl bg-white border border-neutral-200">
                    <span>Other Ranking: </span>
                    <strong>#{item.other2}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="py-2 px-4 rounded-3xl bg-white border border-neutral-200 flex gap-2 items-center">
                    <div>
                      <IoLocationOutline />
                    </div>
                    <span>{item.ubication}</span>
                  </div>
                  <div className="py-2 px-4 rounded-3xl bg-white border border-neutral-200 flex gap-2 items-center">
                    <div>
                      <PiBuildings />
                    </div>
                    <span>{item.status}</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href={item.link} className="flex items-end">
              <SpecialButton text="Visit Website" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RankingsTemplate;
