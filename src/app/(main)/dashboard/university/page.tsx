import UniversitiesTemplate from "@/modules/universities/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universities page",
  description: "University Scholarships and Rankings",
};

export default function University() {
  return <UniversitiesTemplate />;
}
