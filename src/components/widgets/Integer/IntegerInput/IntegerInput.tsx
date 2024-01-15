// @TODO: Review this component
// @ts-nocheck
/* eslint-disable */
import React from "react";
import { BaseFieldProps } from "@/components/form/Field";
import {
  StyledRequiredInputNumber,
  StyledInputNumber,
} from "@/components/widgets/Float/FloatInput/FloatInput.styles";

export const IntegerInput = (props: BaseFieldProps<number>) => {
  const { readOnly, required, ...restProps } = props;
  const InputNumberComponent =
    required && !readOnly ? StyledRequiredInputNumber : StyledInputNumber;

  return (
    <InputNumberComponent
      disabled={readOnly}
      formatter={(value: string) => {
        return `${value}`.replace(/[^0-9]+/g, "");
      }}
      defaultValue={0}
      {...restProps}
    />
  );
};
