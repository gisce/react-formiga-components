import { ModalBottomBarProps } from "@/components/ui/ModalBottomBar/ModalBottomBar.types";

export type EMBottomBarProps = ModalBottomBarProps & {
  onSavePredefined?: () => void;
  onSaveNewPredefined?: () => void;
  showSaveCurrentExport?: boolean;
};
