import React from "react";

export interface Route {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export interface ResourceProps {
  color: string;
  mask1: string;
  mask2: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface PathwayProps {
  id: number;
  color: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface TestProps {
  id: number;
  color: string;
  icon: string;
  title: string;
  subtitle: string;
  subtitle_2: string;
  description: string;
  features: string[];
}

export interface ScholarshipProps {
  id: number;
  status: boolean;
  name: string;
  price: number;
  date: string;
  logo: string;
  elegibility: string[];
  application: string[];
  tests: string[];
  coverage: string[];
}

export interface UniversityScholarshipProps {
  id: number;
  name: string;
  opens: string;
  closes: string;
  logo: string;
  elegibility: string[];
  application: string[];
  tests: string[];
  coverage: string[];
}

export interface UniversityRankingProps {
  id: number;
  logo: string;
  title: string;
  global: number;
  other: number;
  other2: number;
  ubication: string;
  link: string;
  status: string;
}

export interface PopularResourcesProps {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  after: number;
  before: number;
  students: number;
  avatars: string;
}

export interface SchoolProps {
  id: number;
  atar: number;
  type: string;
  map: string;
  ubication: string;
  name: string;
  price: number;
  logo: string;
  gender: string;
  gender_2: string;
  location: string;
  description: string;
  about: string;
  web: string;
  sector: string;
  level: string;
  religion: string;
  checks: string[];
  performance: {
    icsea: {
      school_value: number;
      average_value: number;
    };
    distribution: {
      school: number[];
      australia: number[];
    };
    total_enrollments: number;
    year_range: string;
    median_score: {
      [year: number]: {
        national_average: number;
        this_school: number;
      };
    };
  };
  programs: {
    icon: string;
    title: string;
    date: string;
    type: string;
    color: string;
    subcolor: string;
  }[];
  admissions: {
    school_fees: {
      year_7: number;
      year_12: number;
    };
    gender: string;
    open_days: string;
    selective_programs: {
      icon: string;
      title: string;
      date: string;
      type: string;
      color: string;
      subcolor: string;
    }[];
    scholarship_tests: {
      icon: string;
      title: string;
      date: string;
      type: string;
      color: string;
      subcolor: string;
    }[];
    scholarships_list: {
      icon: string;
      title: string;
      date: string;
      type: string;
      color: string;
      subcolor: string;
    }[];
  };
  academic_performance: {
    average_atar: number;
    recipients: number;
  };
  financial_aid: {
    types: string[];
    total: number;
  };
  activities: {
    clubs: number;
    sports: number;
  };
  qualifications: {
    ratio: string;
    degrees: number;
  };
  facilities: {
    smart_class: boolean;
    labs: number;
  };
  cost: {
    tuition: number;
    add: number;
  };
  culture: string;
  reviews: number;
}
