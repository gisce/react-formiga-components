import React from "react";
import { FieldSetElement, Legend } from "./FieldSet.styles";
import { FieldSetProps } from "./FieldSet.types";

export const FieldSet = (props: FieldSetProps): React.ReactElement => {
  const { label, children } = props;

  return (
    <FieldSetElement>
      <Legend>{label}</Legend>
      {children}
    </FieldSetElement>
  );
};
