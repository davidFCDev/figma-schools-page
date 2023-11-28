import StepThreeTemplate from "@/modules/register/stepThree/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access",
  description: "Login step three.",
};

export default function Login() {
  return <StepThreeTemplate />;
}
