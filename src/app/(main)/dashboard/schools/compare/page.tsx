import SchoolCompareTemplate from "@/modules/schools/templates/SchoolCompare.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Schools page",
  description: "Choose up to 5 schools and compare",
};

export default function SchoolsCompare() {
  return <SchoolCompareTemplate />;
}
