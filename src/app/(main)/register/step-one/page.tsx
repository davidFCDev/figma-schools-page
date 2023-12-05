import StepOneTemplate from "@/modules/register/templates/stepOne.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "First page of registration",
};

export default function Root() {
  return <StepOneTemplate />;
}
