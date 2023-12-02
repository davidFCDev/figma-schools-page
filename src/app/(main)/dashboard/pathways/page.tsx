import { PathwayProvider } from "@/lib/context/pathway-context";
import PathwaysTemplate from "@/modules/pathways/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Pathways page",
  description: "Universities, TAFEs and Apprenticeships",
};

export default function Pathways() {
  return (
    <PathwayProvider>
      <PathwaysTemplate />
    </PathwayProvider>
  );
}
