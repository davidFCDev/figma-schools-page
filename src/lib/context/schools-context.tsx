"use client";
import { createContext, ReactNode, useState } from "react";
import { SCHOOLS } from "@/constants/schools";
import { SchoolProps } from "@/types";

export interface SchoolContextProps {
  selectedSchool: SchoolProps | null;
  handleSelect: (school: SchoolProps) => void;
  searchSchools: (searchTerm: string) => SchoolProps[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: SchoolProps[];
  setSearchResults: React.Dispatch<React.SetStateAction<SchoolProps[]>>;
  searchTerm: string;
}

export const SchoolContext = createContext<SchoolContextProps | undefined>(
  undefined
);

interface SchoolProviderProps {
  children: ReactNode;
}

export const SchoolProvider: React.FC<SchoolProviderProps> = ({ children }) => {
  const [selectedSchool, setSelectedSchool] = useState<SchoolProps | null>(
    SCHOOLS[0] || null
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SchoolProps[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (school: SchoolProps) => {
    setSelectedSchool(school);
  };

  const searchSchools = (searchTerm: string) => {
    return SCHOOLS.filter((school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <SchoolContext.Provider
      value={{
        selectedSchool,
        handleSelect,
        searchSchools,
        handleSearchChange,
        searchResults,
        setSearchResults,
        searchTerm,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};
