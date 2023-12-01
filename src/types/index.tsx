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
