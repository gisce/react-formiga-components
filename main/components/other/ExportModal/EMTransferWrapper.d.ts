import { Locale } from '../../../context/LocaleContext';
import React from "react";
import { ExportField, PredefinedExportField } from "./ExportModal.types";
export type EMTransferWrapperProps = {
    locale: Locale;
    targetKeys: string[];
    onChange: (targetFields: PredefinedExportField[]) => void;
    dataSource: ExportField[];
    onLoadData: (treeNode: any) => Promise<void>;
    disabled?: boolean;
};
export declare const ColumnContainer: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("antd").ColProps & React.RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const EMTransferWrapper: (props: EMTransferWrapperProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EMTransferWrapper.d.ts.map