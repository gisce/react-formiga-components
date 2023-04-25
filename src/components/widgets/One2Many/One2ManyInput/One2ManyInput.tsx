import { Alert } from "antd";
import React, { useState } from "react";
import { One2ManyInputProps } from "./One2ManyInput.types";

export const One2ManyInput = (props: One2ManyInputProps) => {
  const {
    value,
    onChange,
    viewModes,
    onChangeViewMode,
    onRenderMode,
    initialViewMode,
  } = props;

  const [currentViewMode, setCurrentViewMode] = useState(initialViewMode);

  if (!viewModes.includes(initialViewMode)) {
    return <Alert message={`${initialViewMode} not supported`} type="error" />;
  }

  return <>{onRenderMode(currentViewMode)}</>;
};
