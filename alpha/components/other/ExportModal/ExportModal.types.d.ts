export type ExportModalProps = {
    visible: boolean;
    onCancel: () => void;
    onSucceed: (options: ExportOptions) => Promise<void>;
    selectedRegistersToExport?: number;
    totalRegisters: number;
    visibleRegisters: number;
    onGetFields: () => Promise<ExportField[]>;
    onGetFieldChilds: (key: string) => Promise<ExportField[]>;
    selectedKeys?: string[];
    onGetPredefinedExports: () => Promise<{
        predefinedExports: PredefinedExport[];
        keysWithChilds: Array<{
            key: string;
            childs: ExportField[];
        }>;
    }>;
    onSavePredefinedExport: (options: PredefinedExport) => Promise<PredefinedExport>;
    onRemovePredefinedExport: (options: PredefinedExport) => Promise<void>;
};
export type PredefinedExport = {
    id?: number;
    name: string;
    fields: PredefinedExportField[];
};
export type PredefinedExportMandatoryId = Required<Pick<PredefinedExport, "id">> & Omit<PredefinedExport, "id">;
export type PredefinedExportField = {
    key: string;
    title?: string;
};
export type ExportType = "csv" | "xlsx";
export type ExportOptions = {
    exportType: ExportType;
    selectedKeys: string[];
    registersAmount: ExportRegistersAmount;
};
export type ExportRegistersAmount = "all" | "selected";
export type ExportField = {
    title: string;
    tooltip?: string;
    isLeaf?: boolean;
    required?: boolean;
    key: string;
    disabled?: boolean;
    children?: ExportField[];
};
//# sourceMappingURL=ExportModal.types.d.ts.map