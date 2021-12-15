import { Button, Tooltip } from "antd";
import React from "react";
import { ButtonWithTooltipProps } from "./Button.types";

export const ButtonWithTooltip = (props: ButtonWithTooltipProps) => {
  const { tooltip } = props;
  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <Button {...props} />
      </Tooltip>
    );
  }
  return <Button {...props} />;
};
