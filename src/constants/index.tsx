import { IoMdHome } from "react-icons/io";
import { PiTrophyFill, PiBooksFill, PiBuildingsFill } from "react-icons/pi";
import { RiRouteFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { TbCalculatorFilled } from "react-icons/tb";
import { HiLightningBolt } from "react-icons/hi";
import { PathwayProps, Route } from "@/types";

export const ROUTES: Route[] = [
  {
    path: "/dashboard/home",
    name: "Home",
    icon: <IoMdHome />,
  },
  {
    path: "/dashboard/schools",
    name: "Schools & Rankings",
    icon: <PiTrophyFill />,
  },
  {
    path: "/dashboard/scholarships",
    name: "Find Scholarships",
    icon: <FaUserGraduate />,
  },
  {
    path: "/dashboard/guides",
    name: "Test Guides",
    icon: <PiBooksFill />,
  },
  {
    path: "/dashboard/pathways",
    name: "Career Pathways",
    icon: <RiRouteFill />,
  },
  {
    path: "/dashboard/atar",
    name: "ATAR & Subjects",
    icon: <TbCalculatorFilled />,
  },
  {
    path: "/dashboard/university",
    name: "University Info",
    icon: <PiBuildingsFill />,
  },
  {
    path: "/dashboard/resources",
    name: "Study Resources",
    icon: <HiLightningBolt />,
  },
];

export const PATHWAYS: PathwayProps[] = [
  {
    id: 1,
    color: "greenLime",
    icon: "/icons/green-search.png",
    title: "Universities",
    subtitle: "About the University",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
  },
  {
    id: 2,
    color: "violet",
    icon: "/icons/violet-check.png",
    title: "TAFEs",
    subtitle: "About the TAFE",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
  },
  {
    id: 3,
    color: "blue",
    icon: "/icons/blue-books.png",
    title: "Apprenticeships",
    subtitle: "About the Apprenticeships",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
  },
];
