import StepThreeTemplate from "@/modules/register/templates/stepThree.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register page",
  description: "Third step of registration",
};

export default function StepThree() {
  return <StepThreeTemplate />;
}
