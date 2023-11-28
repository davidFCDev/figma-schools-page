import ResourcesTemplate from "@/modules/resources/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Resources page",
  description: "Popular resources",
};

export default function Cart() {
  return <ResourcesTemplate />;
}
