import { LocaleType } from "@/context/LocaleContext";
import { O2MViewMode } from "../One2ManyInput/One2ManyInput.types";

type O2MTopBarButtonOpt = {
  show?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  tooltip?: string;
  icon?: React.ReactNode;
};

type O2MTopBarNavigatorOpt = {
  show?: boolean;
  disabled?: boolean;
  totalItems: number;
  currentItemIndex: number;
  onPreviousItem: () => void;
  onNextItem: () => void;
};

export type O2MTopBarButtonsType = {
  delete?: O2MTopBarButtonOpt;
  create?: O2MTopBarButtonOpt;
  search?: O2MTopBarButtonOpt;
  navigator?: O2MTopBarNavigatorOpt;
};

export type One2manyTopBarProps = LocaleType & {
  title: string;
  readOnly?: boolean;
  totalItems: number;
  currentItemIndex: number;
  viewModes: O2MViewMode[];
  currentViewMode: O2MViewMode;
  onChangeViewMode: (viewMode: O2MViewMode) => void;
  buttonOpts?: O2MTopBarButtonsType;
};
