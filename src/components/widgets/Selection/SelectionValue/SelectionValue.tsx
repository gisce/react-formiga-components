import React from "react";
import { SelectionValueProps } from "./SelectionValue.types";

export const SelectionValue = (props: SelectionValueProps) => {
  const { selectionValues, value } = props;

  return <>{selectionValues[value]}</>;
};
