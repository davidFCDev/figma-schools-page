import SchoolmatchTemplate from "@/modules/schoolmatch/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schoolmatch page",
  description: "Look for your ideal school",
};

export default function Schoolmatch() {
  return <SchoolmatchTemplate />;
}
