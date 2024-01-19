import { Space } from "antd";
import React from "react";
import { Many2OneValueProps } from "./Many2OneValue.types";

export const Many2OneValue = (props: Many2OneValueProps) => {
  const { value, suffix = null } = props;
  return (
    <Space>
      <>{value}</>
      {suffix}
    </Space>
  );
};
