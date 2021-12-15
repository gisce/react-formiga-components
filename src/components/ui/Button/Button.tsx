import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { ButtonFieldProps } from "./Button.types";
import { ButtonWithTooltip } from "./ButtonWithTooltip";
import { AntButtonStyled } from "./Button.styles";

export const Button = (props: ButtonFieldProps) => {
  const {
    icon,
    disabled = false,
    onClick,
    loading = false,
    fullWidth = false,
    tooltip,
    children,
    ...restProps
  } = props;

  const ButtonComponent = fullWidth ? AntButtonStyled : ButtonWithTooltip;

  return (
    <ButtonComponent
      tooltip={tooltip}
      disabled={disabled}
      onClick={() => {
        if (loading) {
          return;
        }
        onClick({ ...props });
      }}
      icon={loading ? <LoadingOutlined /> : icon}
      {...restProps}
    >
      {children}
    </ButtonComponent>
  );
};
