import React from "react";
import { Input } from "antd";
import { CharInputProps } from "./CharInput.types";
import { RequiredCharInput, RequiredPasswordInput } from "./CharInput.styles";
import { ThemeConfig } from "@/theme";

export const CharInput = (props: CharInputProps) => {
  const {
    readOnly = false,
    isPassword = false,
    required = false,
    value,
    onChange,
  } = props;
  const InputComponent = required && !readOnly ? RequiredCharInput : Input;
  const InputPasswordComponent =
    required && !readOnly ? RequiredPasswordInput : Input.Password;
  const requiredClass =
    required && !readOnly ? ThemeConfig.requiredClass : undefined;
  const Component = isPassword ? InputPasswordComponent : InputComponent;
  const compProps = {
    disabled: readOnly,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    value,
    className: requiredClass,
  };

  return <Component {...compProps} />;
};
