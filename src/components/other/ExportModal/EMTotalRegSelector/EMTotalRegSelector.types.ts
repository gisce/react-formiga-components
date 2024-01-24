import { Locale } from "@/context";
import { ExportRegistersAmount } from "../ExportModal.types";

export type EMTotalRegSelectorProps = {
  selectedRegistersToExport?: number;
  visibleRegisters: number;
  totalRegisters: number;
  value: ExportRegistersAmount;
  onChange: (value: ExportRegistersAmount) => void;
};
