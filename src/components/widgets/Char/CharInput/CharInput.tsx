import React from "react";
import { Input } from "antd";
import { CharInputProps } from "./CharInput.types";
import { RequiredCharInput, RequiredPasswordInput } from "./CharInput.styles";

export const CharInput = (props: CharInputProps) => {
  const { readOnly = false, isPassword = false, required = false } = props;
  const InputComponent = required && !readOnly ? RequiredCharInput : Input;
  const InputPasswordComponent =
    required && !readOnly
      ? RequiredPasswordInput
      : Input.Password;

  return isPassword ? (
    <InputPasswordComponent disabled={readOnly} />
  ) : (
    <InputComponent disabled={readOnly} />
  );
};
