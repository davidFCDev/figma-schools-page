"use client";
/* eslint-disable @next/next/no-img-element */
import { style } from "@/style";
import Browse from "../components/browse";
import Score from "../components/score";

const AtarTemplate = () => {
  return (
    <main className={`${style.page} flex flex-col gap-8`}>
      <Browse />
      
      <Score />
    </main>
  );
};

export default AtarTemplate;
