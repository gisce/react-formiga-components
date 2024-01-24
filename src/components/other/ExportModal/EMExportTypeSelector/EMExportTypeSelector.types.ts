import { ExportType } from "../ExportModal.types";

export type EMExportTypeSelectorProps = {
  value: ExportType;
  onChange: (value: ExportType) => void;
};
