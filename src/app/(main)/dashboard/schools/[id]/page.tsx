import { SchoolSelectedProvider } from "@/lib/context/school-selected.context";
import SelectedSchoolTemplate from "@/modules/schools/templates/SelectedSchool.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected school info page",
  description: "Check out the info of a selected school",
};

export default function SelectedSchool() {
  return (
    <SchoolSelectedProvider>
      <SelectedSchoolTemplate />
    </SchoolSelectedProvider>
  );
}
