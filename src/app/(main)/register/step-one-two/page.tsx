import StepOneTwoTemplate from "@/modules/register/stepOneTwo/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access",
  description: "Login step one, second option.",
};

export default function StepOneTwo() {
  return <StepOneTwoTemplate />;
}
