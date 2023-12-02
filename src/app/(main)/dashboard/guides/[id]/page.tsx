import TestInfoTemplate from "@/modules/guides/templates/TestInfo.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test guide page",
  description: "Learn about test guides for scholarships",
};

export default function Test() {

  return (
    <TestInfoTemplate />
  );
};

