import { createContext, useContext } from "react";

const ExternalProjectContext = createContext();

export const ExternalProjectProvider = ({ children, onExternalProjectClick }) => (
  <ExternalProjectContext.Provider value={{ onExternalProjectClick }}>
    {children}
  </ExternalProjectContext.Provider>
);

export const useExternalProject = () => useContext(ExternalProjectContext);