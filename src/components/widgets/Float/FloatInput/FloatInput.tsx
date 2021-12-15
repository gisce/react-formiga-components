import React from "react";
import { FloatInputProps } from "./FloatInput.types";
import {
  StyledInputNumber,
  StyledRequiredInputNumber,
} from "./FloatInput.styles";

export const FloatInput = (props: FloatInputProps) => {
  const { readOnly, required, decimalDigits, ...restProps } = props;
  const InputNumberComponent =
    required && !readOnly ? StyledRequiredInputNumber : StyledInputNumber;

  return (
    <InputNumberComponent
      disabled={readOnly}
      precision={decimalDigits}
      formatter={(value: string) => {
        return `${value}`.replace(/[^0-9\.\-]+/g, "");
      }}
      defaultValue={0}
      decimalSeparator={"."}
      {...restProps}
    />
  );
};
