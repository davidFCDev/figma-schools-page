import { SchoolProvider } from "@/lib/context/schools-context";
import SchoolsTemplate from "@/modules/schools/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schools & Rankings page",
  description: "Search all the schools in Western Australia",
};

export default function Schools() {
  return (
    <SchoolProvider>
      <SchoolsTemplate />
    </SchoolProvider>
  );
}
