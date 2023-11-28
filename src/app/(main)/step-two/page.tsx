import StepTwoTemplate from "@/modules/register/stepTwo/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access",
  description: "Login step two.",
};

export default function Login() {
  return <StepTwoTemplate />;
}
