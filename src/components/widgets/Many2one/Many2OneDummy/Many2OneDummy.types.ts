import { BaseFieldProps } from "@/components/form/Field";
import React from "react";

export type Many2OneDummyProps = BaseFieldProps<string> & {
  suffix?: React.ReactNode;
  searching?: boolean;
  showFolderButton?: boolean;
  disableFolderButton?: boolean;
  onClickFolderButton?: () => void;
  showSearchButton?: boolean;
  disableSearchButton?: boolean;
  onClickSearchButton?: () => void;
  onElementLostFocus?: () => void;
  onEnterPressed?: () => void;
};
