import RootTemplate from "@/modules/root/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main page",
  description: "Register and access the dashboard",
};

export default function Root() {
  return <RootTemplate />;
}
