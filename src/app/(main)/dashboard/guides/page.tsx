import GuidesTemplate from "@/modules/guides/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides page",
  description: "Learn about test guides for scholarships",
};

export default function Guides() {
  return <GuidesTemplate />;
}
