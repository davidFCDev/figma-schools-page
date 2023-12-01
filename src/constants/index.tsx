import { IoMdHome } from "react-icons/io";
import { PiTrophyFill, PiBooksFill, PiBuildingsFill } from "react-icons/pi";
import { RiRouteFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { TbCalculatorFilled } from "react-icons/tb";
import { HiLightningBolt } from "react-icons/hi";
import {
  PathwayProps,
  PopularResourcesProps,
  ResourceProps,
  Route,
  ScholarshipProps,
  UniversityRankingProps,
  UniversityScholarshipProps,
} from "@/types";

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
    color: "#8AC53E",
    icon: "/icons/green-search.png",
    title: "Universities",
    subtitle: "About the University",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
    features: [
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
    ],
  },
  {
    id: 2,
    color: "#C099FC",
    icon: "/icons/violet-check.png",
    title: "TAFEs",
    subtitle: "About the TAFE",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
    features: [
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
    ],
  },
  {
    id: 3,
    color: "#369FFF",
    icon: "/icons/blue-books.png",
    title: "Apprenticeships",
    subtitle: "About the Apprenticeships",
    description:
      "The Australian Council for Educational Research (ACER) is an independent organization that conducts research and develops assessments, including scholarship and entrance tests, primarily for Australian educational institutions.",
    features: [
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
      "We would list your resources or affiliate programs, something that provides prep for this particular test ",
    ],
  },
];

export const SCHOLARSHIPS: ScholarshipProps[] = [
  {
    id: 1,
    status: true,
    name: "Perth Modern School",
    price: 20000,
    date: "Nov 20, 2023",
    logo: "/logos/school1.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
  {
    id: 2,
    status: true,
    name: "St Hilda's Anglican School for Girls",
    price: 20000,
    date: "Aug 20, 2023",
    logo: "/logos/mu-logo.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
  {
    id: 3,
    status: false,
    name: "Christ Church Grammar School",
    price: 20000,
    date: "Sept 20, 2023",
    logo: "/logos/school3.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
];

export const UNIVERSITY_SCHOLARSHIPS: UniversityScholarshipProps[] = [
  {
    id: 1,
    name: "Scholarship Title",
    opens: "Nov 20, 2023",
    closes: "Nov 20, 2023",
    logo: "/logos/mu-logo.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
  {
    id: 2,
    name: "Scholarship Title",
    opens: "Nov 20, 2023",
    closes: "Nov 20, 2023",
    logo: "/logos/mu-logo.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
  {
    id: 3,
    name: "Scholarship Title",
    opens: "Nov 20, 2023",
    closes: "Nov 20, 2023",
    logo: "/logos/mu-logo.png",
    elegibility: ["Year 11 and 12 students", "Minimum GPA of 3.5"],
    application: ["Online", "In Person"],
    tests: ["ACER Scholarship Test"],
    coverage: ["Boarding", "Books", "Tuition"],
  },
];

export const UNIVERSITY_RANKINGS: UniversityRankingProps[] = [
  {
    id: 1,
    logo: "/logos/mu-logo-big.png",
    title: "Murdoch University",
    global: 2,
    other: 2,
    other2: 2,
    ubication: "Perth, Claremont",
    link: "https://www.murdoch.edu.au/",
    status: "Private",
  },
  {
    id: 2,
    logo: "/logos/mu-logo-big.png",
    title: "Murdoch University",
    global: 2,
    other: 2,
    other2: 2,
    ubication: "Perth, Claremont",
    link: "https://www.murdoch.edu.au/",
    status: "Private",
  },
  {
    id: 3,
    logo: "/logos/mu-logo-big.png",
    title: "Murdoch University",
    global: 2,
    other: 2,
    other2: 2,
    ubication: "Perth, Claremont",
    link: "https://www.murdoch.edu.au/",
    status: "Private",
  },
  {
    id: 4,
    logo: "/logos/mu-logo-big.png",
    title: "Murdoch University",
    global: 2,
    other: 2,
    other2: 2,
    ubication: "Perth, Claremont",
    link: "https://www.murdoch.edu.au/",
    status: "Private",
  },
  {
    id: 5,
    logo: "/logos/mu-logo-big.png",
    title: "Murdoch University",
    global: 2,
    other: 2,
    other2: 2,
    ubication: "Perth, Claremont",
    link: "https://www.murdoch.edu.au/",
    status: "Private",
  },
];

export const RESOURCES: PopularResourcesProps[] = [
  {
    id: 1,
    image: "/resource-1.png",
    date: "28 July 2022",
    title: "WACE Accounting and Finance",
    description:
      "Subscribing to ReviseOnline WACE Accounting & Finance course (Units 1&2 and Units 3&4) gives you access to an exte...",
    after: 500,
    before: 400,
    students: 40,
    avatars: "/avatar-group.png",
  },
  {
    id: 2,
    image: "/resource-2.png",
    date: "28 July 2022",
    title: "WACE Accounting and Finance",
    description:
      "Subscribing to ReviseOnline WACE Accounting & Finance course (Units 1&2 and Units 3&4) gives you access to an exte...",
    after: 500,
    before: 678,
    students: 11,
    avatars: "/avatar-group.png",
  },
  {
    id: 3,
    image: "/resource-3.png",
    date: "28 July 2022",
    title: "WACE Accounting and Finance",
    description:
      "Subscribing to ReviseOnline WACE Accounting & Finance course (Units 1&2 and Units 3&4) gives you access to an exte...",
    after: 500,
    before: 123,
    students: 234,
    avatars: "/avatar-group.png",
  },
];
