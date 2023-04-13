import { Locale } from "@/context";
import { ExportType } from "../ExportModal.types";

export type EMExportTypeSelectorProps = {
  locale: Locale;
  value: ExportType;
  onChange: (value: ExportType) => void;
};
