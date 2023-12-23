import StepOneTemplate from "@/modules/register/templates/stepOne.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main page",
  description: "Register and access the dashboard",
};

export default function Root() {
  return <StepOneTemplate />;
}
