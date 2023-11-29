
import HomeTemplate from "@/modules/home/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home page",
  description: "Welcome to Edufy",
}

export default function Home() {
  return <HomeTemplate />
}
