"use client";

import { usePathname } from "next/navigation";
import { createContext, ReactNode, useState } from "react";

export interface RoutesContextProps {


}

export const RoutesContext = createContext<RoutesContextProps | undefined>(
  undefined
);

interface RoutesProviderProps {
  children?: ReactNode;
}

export const RoutesProvider = ({ children }: RoutesProviderProps) => {
  const [show, setShow] = useState(false);
  const currentPath = usePathname();

  const handleShow = () => {
    setShow(!show);
  };


  return (
    <RoutesContext.Provider
      value={{

      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};
