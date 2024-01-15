import { createContext, useState, ReactNode, useContext } from "react";
import { ExportField } from "./ExportModal.types";

export interface ExportModalContextProps {
  children?: ReactNode;
}

export interface ExportModalContextValues {
  dataSource: ExportField[];
  setDataSource: (treeData: ExportField[]) => void;
}

export const ExportModalContext =
  createContext<ExportModalContextValues | null>(null);

export const ExportModalContextProvider = (
  props: ExportModalContextProps,
): any => {
  const { children } = props;
  const [dataSource, setDataSource] = useState<ExportField[]>([]);

  return (
    <ExportModalContext.Provider
      value={{
        dataSource,
        setDataSource,
      }}
    >
      {children}
    </ExportModalContext.Provider>
  );
};

export const useExportModalContext = () => {
  const context = useContext(ExportModalContext);
  if (!context) {
    throw new Error(
      "useExportModalContext must be used within a ExportModalContextProvider",
    );
  }
  return context;
};
