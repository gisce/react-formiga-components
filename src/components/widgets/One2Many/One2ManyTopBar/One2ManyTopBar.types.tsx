import {
  LocaleType,
} from "context/LocaleContext";

export type One2manyTopBarProps = LocaleType & {
  title: string;
  mode: "tree" | "form";
  isMany2Many: boolean;
  readOnly?: boolean;
  saveButtonLoading: boolean;
  saveButtonDisabled: boolean;
  onToggleViewMode: () => void;
  onCreateItem: () => void;
  onSaveItem: () => void;
  onDelete: () => void;
  totalItems: number;
  currentItemIndex: number;
  onPreviousItem: () => void;
  onNextItem: () => void;
  onSearchItem: () => void;
};
