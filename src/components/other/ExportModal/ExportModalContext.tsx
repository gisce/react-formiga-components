import { createContext, useState } from "react";
import { ExportField } from "./ExportModal.types";
import React from "react";

export interface ExportModalContextProps {
  children?: React.ReactNode;
  // onGetFieldChilds: ({
  //   key,
  //   title,
  // }: {
  //   key: string;
  //   title: string;
  // }) => Promise<ExportField[]>;
  // onGetFields: () => Promise<ExportField[]>;
}

export interface ExportModalContextValues {
  dataSource: ExportField[];
  setDataSource: (treeData: ExportField[]) => void;
  // onGetFieldChilds: ({
  //   key,
  //   title,
  // }: {
  //   key: string;
  //   title: string;
  // }) => Promise<ExportField[]>;
  // loadInitialFields: () => Promise<void>;
  // onLoadData: (treeNode: any) => Promise<void>;
  // onLoadMultipleKeys: (newKeys: string[]) => Promise<void>;
}

export const ExportModalContext =
  createContext<ExportModalContextValues | null>(null);

export const ExportModalContextProvider = (
  props: ExportModalContextProps
): any => {
  // const { children, onGetFieldChilds, onGetFields } = props;
  const { children } = props;
  const [dataSource, setDataSource] = useState<ExportField[]>();

  // const {
  //   treeData,
  //   setTreeData,
  //   onLoadData,
  //   onLoadMultipleKeys,
  //   loadInitialFields,
  // } = useExportTreeData({
  //   onGetFieldChilds: onGetFieldChilds,
  //   onGetFields: onGetFields,
  // });

  return (
    <ExportModalContext.Provider
      value={{
        dataSource,
        setDataSource, // onGetFieldChilds,
        // loadInitialFields,
        // onLoadData,
        // onLoadMultipleKeys,
      }}
    >
      {children}
    </ExportModalContext.Provider>
  );
};
