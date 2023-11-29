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
}
