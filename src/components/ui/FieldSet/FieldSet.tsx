import React, { useState } from "react";
import { FieldSetElement, Legend } from "./FieldSet.styles";
import { FieldSetProps } from "./FieldSet.types";
import { Space } from "antd";

export const FieldSet = (props: FieldSetProps): React.ReactElement => {
  const { label, children, icon: Icon, borderRadius } = props;
  const labelComponent = (
    <Space>
      {Icon ? <Icon /> : null}
      {label}
    </Space>
  );

  return (
    <FieldSetElement borderRadius={borderRadius}>
      <Legend>{labelComponent}</Legend>
      {children}
    </FieldSetElement>
  );
};

export const ToggleFieldSet = (props: FieldSetProps): React.ReactElement => {
  const { label, children, icon: Icon } = props;
  const [isOpen, setIsOpen] = useState(true);
  const labelComponent = (
    <Space>
      {Icon ? <Icon /> : null}
      {label}
    </Space>
  );

  return (
    <FieldSetElement>
      <Legend onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼" : "►"}
        {labelComponent}
      </Legend>
      {isOpen && <>{children}</>}
    </FieldSetElement>
  );
};
