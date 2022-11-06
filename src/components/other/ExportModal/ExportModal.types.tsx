import { Locale } from "@/context/LocaleContext";

export type ExportModalProps = {
  locale: Locale;
  visible: boolean;
  onCancel: () => void;
  onSucceed: (options: ExportOptions) => Promise<void>;
  selectedRegistersToExport?: number;
  totalRegisters: number;
  onGetFields: () => Promise<ExportField[]>;
  onGetFieldChilds: ({
    key,
    title,
  }: {
    key: string;
    title: string;
  }) => Promise<ExportField[]>;
  selectedKeys?: string[];
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
  children?: ExportField[];
};
