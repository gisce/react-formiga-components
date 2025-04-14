/// <reference types="react" />
import { ExportField, PredefinedExportField } from "./ExportModal.types";
export type EMTransferWrapperProps = {
    targetKeys: string[];
    onChange: (targetFields: PredefinedExportField[]) => void;
    dataSource: ExportField[];
    onLoadData: (treeNode: any) => Promise<void>;
    disabled?: boolean;
};
export declare const ColumnContainer: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("antd").ColProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const EMTransferWrapper: (props: EMTransferWrapperProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EMTransferWrapper.d.ts.map