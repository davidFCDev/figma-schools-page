import StepTwoTemplate from "@/modules/register/templates/stepTwo.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register page",
  description: "Second step of registration",
};

export default function StepTwo() {
  return <StepTwoTemplate />;
}
