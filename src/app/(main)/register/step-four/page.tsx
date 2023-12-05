import StepFourTemplate from "@/modules/register/templates/stepFour.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register page",
  description: "Step four of registration",
};

export default function StepFour() {
  return <StepFourTemplate />;
}
