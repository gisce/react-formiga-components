import { BaseFieldProps } from "components/form/Field";
import React from "react";

export type ItemPair = {
  id?: number;
  name: string;
};

export type Many2OneInputProps = BaseFieldProps<ItemPair> & {
  suffix?: React.ReactNode;
  onShowResultDetails?: (item: ItemPair) => void;
  onSearchForResult?: (name: string) => void;
  searching?: boolean;
};
