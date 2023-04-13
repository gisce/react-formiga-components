import { Locale } from "@/context/LocaleContext";

export type ExportModalProps = {
  locale: Locale;
  visible: boolean;
  onCancel: () => void;
  onSucceed: (options: ExportOptions) => Promise<void>;
  selectedRegistersToExport?: number;
  totalRegisters: number;
  visibleRegisters: number;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => Promise<ExportField[]>;
  selectedKeys?: string[];
  onGetPredefinedExports: () => Promise<PredefinedExport[]>;
  onSavePredefinedExport: (options: PredefinedExport) => Promise<void>;
  onRemovePredefinedExport: (options: PredefinedExport) => Promise<void>;
};

export type PredefinedExport = {
  id?: number;
  name: string;
  fields: PredefinedExportField[];
};

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

// fieldKey examples:
// - cups
// - cups/name
// - hist_autoconsum/cups_id/aclarador
export type ExportField = {
  title: string;
  tooltip?: string;
  isLeaf?: boolean;
  required?: boolean;
  key: string;
  disabled?: boolean;
  children?: ExportField[];
};
