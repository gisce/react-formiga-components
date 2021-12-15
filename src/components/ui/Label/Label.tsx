import React from "react";
import { Tooltip } from "antd";
import { LabelProps } from "./Label.types";
import { LabelContainer, TooltipIcon, Text } from "./Label.styles";

const Label = (props: LabelProps) => {
  const { tooltip, text, align = "left" } = props;

  return (
    <LabelContainer align={align}>
      {tooltip && (
        <Tooltip title={tooltip}>
          <TooltipIcon />
        </Tooltip>
      )}
      <Text>{text}</Text>
    </LabelContainer>
  );
};

export { Label };
