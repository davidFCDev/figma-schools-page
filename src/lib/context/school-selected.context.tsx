"use client";
import { SCHOOLS } from "@/constants/schools";
import { SchoolProps } from "@/types";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface SchoolSelectedContextProps {
  selectedSchool: SchoolProps | undefined;
  selectedComponent: string;
  handleSelectComponent: (component: string) => void;
  setSelectedSchool: React.Dispatch<React.SetStateAction<SchoolProps | undefined>>;
}

export const SchoolSelectedContext = createContext<
  SchoolSelectedContextProps | undefined
>(undefined);

interface SchoolSelectedProviderProps {
  children: ReactNode;
}

export const SchoolSelectedProvider: React.FC<SchoolSelectedProviderProps> = ({
  children,
}) => {
  const [selectedSchool, setSelectedSchool] = useState<SchoolProps | undefined>(
    undefined
  );
  const [selectedComponent, setSelectedComponent] = useState<string>(
    "programsOfferings"
  );

  const { id } = useParams() || { id: undefined };

  useEffect(() => {
    const school = SCHOOLS.find((school) => school.id === Number(id));

    if (school) {
      setSelectedSchool(school);
    } else {
      setSelectedSchool(undefined);
      console.error(`School not found with id: ${id}`);
    }
  }, [id]);

  const handleSelectComponent = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <SchoolSelectedContext.Provider
      value={{
        selectedSchool,
        selectedComponent,
        handleSelectComponent,
        setSelectedSchool,
      }}
    >
      {children && <>{children}</>}
    </SchoolSelectedContext.Provider>
  );
};

