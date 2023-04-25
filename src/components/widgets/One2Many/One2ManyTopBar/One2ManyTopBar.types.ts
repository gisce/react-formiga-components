import { LocaleType } from "@/context/LocaleContext";
import { O2MViewMode } from "../One2ManyInput/One2ManyInput.types";

export type O2MTopBarButtonBasicOpt = {
  show?: boolean;
  tooltip?: string;
  icon?: React.ReactNode;
};

type O2MTopBarButtonOpt = O2MTopBarButtonBasicOpt & {
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
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
  toggleViewMode?: { loading?: boolean };
};

export type One2manyTopBarProps = LocaleType & {
  title: string;
  viewModes: O2MViewMode[];
  currentViewMode: O2MViewMode;
  onChangeViewMode: (viewMode: O2MViewMode) => void;
  buttonOpts?: O2MTopBarButtonsType;
};
