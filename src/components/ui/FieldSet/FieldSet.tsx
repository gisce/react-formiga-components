import React, { useState } from "react";
import { FieldSetElement, Legend } from "./FieldSet.styles";
import { FieldSetProps } from "./FieldSet.types";
import { Space, theme } from "antd";

const { useToken } = theme;

export const FieldSet = (props: FieldSetProps): React.ReactElement => {
  const {
    label,
    children,
    icon: Icon,
    borderRadius,
    backgroundColor,
    borderColor,
  } = props;
  const { token } = useToken();
  const labelComponent = (
    <Space>
      {Icon ? <Icon /> : null}
      {label}
    </Space>
  );

  return (
    <FieldSetElement
      $borderRadius={`${borderRadius || token.borderRadius}px`}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
    >
      <Legend>{labelComponent}</Legend>
      {children}
    </FieldSetElement>
  );
};

export const ToggleFieldSet = (props: FieldSetProps): React.ReactElement => {
  const { label, children, icon: Icon, backgroundColor, borderColor } = props;
  const [isOpen, setIsOpen] = useState(true);
  const labelComponent = (
    <Space>
      {Icon ? <Icon /> : null}
      {label}
    </Space>
  );

  return (
    <FieldSetElement
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
    >
      <Legend onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼" : "►"}
        {labelComponent}
      </Legend>
      {isOpen && <>{children}</>}
    </FieldSetElement>
  );
};
