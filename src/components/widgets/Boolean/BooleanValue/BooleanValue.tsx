import { Checkbox } from "antd";
import React from "react";
import { BooleanValueProps } from "./BooleanValue.types";

export const BooleanValue = (props: BooleanValueProps) => {
  const { value } = props;
  return <Checkbox defaultChecked={value} disabled />;
};
