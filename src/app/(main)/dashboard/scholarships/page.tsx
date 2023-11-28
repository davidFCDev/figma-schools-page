import ScholarshipsTemplate from "@/modules/scholarships/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships page",
  description: "Find Scholarships across Western Australia",
};

export default function Cart() {
  return <ScholarshipsTemplate />;
}
