import React from "react";
import { Divider } from "antd";
import { SeparatorProps } from "./Separator.types";

export const Separator = (props: SeparatorProps) => {
  const { label } = props;

  return (
    <Divider orientation="left" className="text-sm">
      {label}
    </Divider>
  );
};
