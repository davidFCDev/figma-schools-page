import RankingsTemplate from "@/modules/universities/templates/Rankings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University rankings page",
  description: "University Rankings",
};

export default function UniversityRankings() {
  return <RankingsTemplate />;
}
