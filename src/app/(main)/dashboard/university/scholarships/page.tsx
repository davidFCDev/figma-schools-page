import ScholarshipsTemplate from "@/modules/universities/templates/Scholarships";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universities scholarships page",
  description: "University Scholarships ",
};

export default function UniversityScholarships() {
  return <ScholarshipsTemplate />;
}
