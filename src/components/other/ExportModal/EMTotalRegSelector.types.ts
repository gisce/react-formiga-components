import { Locale } from "@/context";
import { ExportRegistersAmount } from "./ExportModal.types";

export type EMTotalRegSelectorProps = {
  locale: Locale;
  selectedRegistersToExport: number;
  totalRegisters: number;
  value: ExportRegistersAmount;
  onChange: (value: ExportRegistersAmount) => void;
};
