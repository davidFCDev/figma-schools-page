import { TestProvider } from "@/lib/context/test-context";
import GuidesTemplate from "@/modules/guides/templates/Guides.template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides page",
  description: "Learn about test guides for scholarships",
};

export default function Guides() {
  return (
    <TestProvider>
      <GuidesTemplate />
    </TestProvider>
  );
}
