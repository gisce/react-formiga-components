import { ReactNode } from "react";
import { ExportField } from "./ExportModal.types";
export interface ExportModalContextProps {
    children?: ReactNode;
}
export interface ExportModalContextValues {
    dataSource: ExportField[];
    setDataSource: (treeData: ExportField[]) => void;
}
export declare const ExportModalContext: import("react").Context<ExportModalContextValues | null>;
export declare const ExportModalContextProvider: (props: ExportModalContextProps) => any;
export declare const useExportModalContext: () => ExportModalContextValues;
//# sourceMappingURL=ExportModalContext.d.ts.map