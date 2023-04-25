import { Alert } from "antd";
import React, { useState } from "react";
import { One2ManyTopBar } from "../One2ManyTopBar";
import { O2MViewMode, One2ManyInputProps } from "./One2ManyInput.types";

export const One2ManyInput = (props: One2ManyInputProps) => {
  const {
    title,
    locale,
    value,
    onChange,
    viewModes,
    onChangeViewMode,
    onRenderMode,
    initialViewMode,
  } = props;

  const [currentViewMode, setCurrentViewMode] = useState(initialViewMode);

  if (!viewModes.includes(initialViewMode)) {
    return (
      <Alert message={`${initialViewMode} view not supported`} type="error" />
    );
  }

  return (
    <>
      <One2ManyTopBar
        locale={locale}
        title={title}
        viewModes={viewModes}
        currentViewMode={currentViewMode}
        onChangeViewMode={(mode: O2MViewMode) => {
          setCurrentViewMode(mode);
        }}
      />
      {onRenderMode(currentViewMode)}
    </>
  );
};
