import { ExportField, PredefinedExportField } from "./ExportModal.types";
export type EMTransferProps = {
    targetKeys: string[];
    onChange: (targetFields: PredefinedExportField[]) => void;
    onGetFields: () => Promise<ExportField[]>;
    onGetFieldChilds: (key: string) => Promise<ExportField[]>;
    disabled?: boolean;
};
export declare const EMTransfer: ({ targetKeys, onGetFields, onGetFieldChilds, onChange, disabled, }: EMTransferProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=EMTransfer.d.ts.map