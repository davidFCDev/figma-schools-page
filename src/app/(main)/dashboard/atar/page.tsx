import AtarTemplate from "@/modules/atar/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATAR & Subjects page",
  description: "Estimate your ATAR score",
};

export default function Atar() {
  return <AtarTemplate />;
}
