import React from "react";
import { FieldSetElement, Legend } from "./FieldSet.styles";
import { FieldSetProps } from "./FieldSet.types";
import { Space } from "antd";

export const FieldSet = (props: FieldSetProps): React.ReactElement => {
  const { label, children, icon: Icon } = props;
  const labelComponent = (
    <Space>
      {Icon ? <Icon /> : null}
      {label}
    </Space>
  );

  return (
    <FieldSetElement>
      <Legend>{labelComponent}</Legend>
      {children}
    </FieldSetElement>
  );
};
