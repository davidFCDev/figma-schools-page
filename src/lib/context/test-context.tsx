"use client";
import { TESTS } from "@/constants";
import { TestProps } from "@/types";
import { createContext, ReactNode, useState } from "react";

export interface TestContextProps {
  selectedTest: TestProps | null;
  handleTestClick: (test: TestProps) => void;
}

export const TestContext = createContext<TestContextProps | undefined>(
  undefined
);

interface TestProviderProps {
  children?: ReactNode;
}

export const TestProvider = ({ children }: TestProviderProps) => {
  const [selectedTest, setselectedTest] = useState<TestProps | null>(
    TESTS[1] || null
  );

  const handleTestClick = (test: TestProps) => {
    setselectedTest(test);
  };

  return (
    <TestContext.Provider
      value={{
        selectedTest,
        handleTestClick,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
