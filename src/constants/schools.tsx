import { SchoolProps } from "@/types";

export const SCHOOLS: SchoolProps[] = [
  {
    id: 1,
    atar: 97.55,
    type: "Public",
    map: "/map.png",
    name: "Perth Modern School",
    ubication: "Perth, Subiaco",
    price: 20000,
    logo: "/logos/school-big.png",
    gender: "Co-ed",
    gender_2: "Both",
    location: "/map.png",
    description:
      "Located in Subiaco, an inner city suburb of Perth, Western Australia Perth Modern School is an academically selective co-educational public high school.",
    about:
      "Albany Senior High School has a proud traditional and rich history of academic achievement, sporting excellence and cultural life. It is a co-educational government senior high school enrolling students in Years 7 - 12.",
    web: "#",
    sector: "Catholic",
    level: "Secondary",
    religion: "Catholic",
    checks: ["Boarding School", "Offers 1B", "Accepts international students"],
    performance: {
      icsea: {
        school_value: 1116,
        average_value: 1000,
      },
      distribution: {
        school: [33, 33, 33],
        australia: [33, 33, 33],
      },
      total_enrollments: 432,
      year_range: "7-12",
      median_score: [
        {
          2019: {
            national_average: 54.2,
            this_school: 70.45,
          },
        },
      ],
    },
    programs: [
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
    ],
    admissions: {
      school_fees: {
        year_7: 10750,
        year_10: 10750,
        year_11: 10750,
        year_12: 10750,
      },
      gender: "Boys & Girls",
      open_days: "#",
      selective_programs: [
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
      ],
      scholarship_tests: [
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
      ],
      scholarships_list: [
        {
          icon: "/icons/blue-book.png",
          title: "Excellence in STEM Scholarship",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
      ],
    },
    academic_performance: {
      average_atar: 89,
      recipients: 78,
    },
    financial_aid: {
      types: ["Sport-based"],
      total: 432,
    },
    activities: {
      clubs: 15,
      sports: 3,
    },
    qualifications: {
      ratio: "1:20",
      degrees: 60,
    },
    facilities: {
      smart_class: true,
      labs: 4,
    },
    cost: {
      tuition: 10000,
      add: 500,
    },
    culture: "Competitive",
    reviews: 4.5,
  },
  {
    id: 2,
    atar: 92.7,
    type: "Private",
    map: "/map.png",
    name: "St Hilda's Anglican School for Girls",
    ubication: "Perth, Mosman Park",
    price: 20000,
    logo: "/logos/school-big.png",
    gender: "Girls",
    gender_2: "Female",
    location: "/map.png",
    description:
      "Located in Mosman Park, an inner city suburb of Perth, St Hilda's Anglican School for Girls is an academically selective co-educational public high school.",
    about:
      "Albany Senior High School has a proud traditional and rich history of academic achievement, sporting excellence and cultural life. It is a co-educational government senior high school enrolling students in Years 7 - 12.",
    web: "#",
    sector: "Catholic",
    level: "Secondary",
    religion: "Catholic",
    checks: ["Boarding School", "Offers 1B", "Accepts international students"],
    performance: {
      icsea: {
        school_value: 1116,
        average_value: 1000,
      },
      distribution: {
        school: [33, 33, 33],
        australia: [33, 33, 33],
      },
      total_enrollments: 432,
      year_range: "7-12",
      median_score: [
        {
          2019: {
            national_average: 54.2,
            this_school: 70.45,
          },
        },
      ],
    },
    programs: [
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
    ],
    admissions: {
      school_fees: {
        year_7: 10750,
        year_10: 10750,
        year_11: 10750,
        year_12: 10750,
      },
      gender: "Girls Only",
      open_days: "#",
      selective_programs: [
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
      ],
      scholarship_tests: [
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
      ],
      scholarships_list: [
        {
          icon: "/icons/blue-book.png",
          title: "Excellence in STEM Scholarship",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
      ],
    },
    academic_performance: {
      average_atar: 89,
      recipients: 78,
    },
    financial_aid: {
      types: ["Sport-based"],
      total: 432,
    },
    activities: {
      clubs: 15,
      sports: 3,
    },
    qualifications: {
      ratio: "1:20",
      degrees: 60,
    },
    facilities: {
      smart_class: true,
      labs: 4,
    },
    cost: {
      tuition: 10000,
      add: 500,
    },
    culture: "Competitive",
    reviews: 4.5,
  },
  {
    id: 3,
    atar: 92.11,
    type: "Private",
    map: "/map.png",
    name: "Christ Church Grammar School",
    ubication: "Perth, Claremont",
    price: 20000,
    logo: "/logos/school-big.png",
    gender: "Boys",
    gender_2: "Male",
    location: "/map.png",
    description:
      "Located in Claremont, an inner city suburb of Perth, Christ Church Grammar School is an academically selective co-educational public high school.",
    about:
      "Albany Senior High School has a proud traditional and rich history of academic achievement, sporting excellence and cultural life. It is a co-educational government senior high school enrolling students in Years 7 - 12.",
    web: "#",
    sector: "Catholic",
    level: "Secondary",
    religion: "Catholic",
    checks: ["Boarding School", "Offers 1B", "Accepts international students"],
    performance: {
      icsea: {
        school_value: 1116,
        average_value: 1000,
      },
      distribution: {
        school: [33, 33, 33],
        australia: [33, 33, 33],
      },
      total_enrollments: 432,
      year_range: "7-12",
      median_score: [
        {
          2019: {
            national_average: 54.2,
            this_school: 70.45,
          },
        },
      ],
    },
    programs: [
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
      {
        icon: "/icons/blue-book.png",
        title: "Advanced Mathematics Program",
        date: "Sep 30, 2023",
        type: "Merit-based",
        color: "#369FFF",
        subcolor: "#D7ECFF",
      },
      {
        icon: "/icons/yellow-palette.png",
        title: "Drama Excellence Program",
        date: "Sep 30, 2023",
        type: "Academic",
        color: "#FFD143",
        subcolor: "#FFF6D9",
      },
    ],
    admissions: {
      school_fees: {
        year_7: 10750,
        year_10: 10750,
        year_11: 10750,
        year_12: 10750,
      },
      gender: "Boys Only",
      open_days: "#",
      selective_programs: [
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
        {
          icon: "/icons/blue-book.png",
          title: "Advanced Mathematics Program",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/yellow-palette.png",
          title: "Drama Excellence Program",
          date: "Sep 30, 2023",
          type: "Academic",
          color: "#FFD143",
          subcolor: "#FFF6D9",
        },
      ],
      scholarship_tests: [
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
        {
          icon: "/icons/violet-crown.png",
          title: "Leadership Abilities Assessment",
          date: "Sep 30, 2023",
          type: "Leadership",
          color: "#C099FC",
          subcolor: "#F0E5FE",
        },
        {
          icon: "/icons/orange-heart.png",
          title: "Community Outreach Evaluation",
          date: "Sep 30, 2023",
          type: "Community Service",
          color: "#E5743D",
          subcolor: "#FFEBD8",
        },
      ],
      scholarships_list: [
        {
          icon: "/icons/blue-book.png",
          title: "Excellence in STEM Scholarship",
          date: "Sep 30, 2023",
          type: "Merit-based",
          color: "#369FFF",
          subcolor: "#D7ECFF",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
        {
          icon: "/icons/green-ball.png",
          title: "All-Round Sports Scholarship",
          date: "Sep 30, 2023",
          type: "Sports-based",
          color: "#8AC53E",
          subcolor: "#E8F3D8",
        },
      ],
    },
    academic_performance: {
      average_atar: 89,
      recipients: 78,
    },
    financial_aid: {
      types: ["Sport-based"],
      total: 432,
    },
    activities: {
      clubs: 15,
      sports: 3,
    },
    qualifications: {
      ratio: "1:20",
      degrees: 60,
    },
    facilities: {
      smart_class: true,
      labs: 4,
    },
    cost: {
      tuition: 10000,
      add: 500,
    },
    culture: "Competitive",
    reviews: 4.5,
  },
];
