import React from "react";
import { StyledProgress } from "./ProgressBarValue.styles";

export const ProgressBarValue = ({ value }: { value?: number }) => {
  const isIndeterminate = value === -1;
  const textValue = `${(value || 0).toLocaleString("en-US", {
    minimumIntegerDigits: 1,
    maximumFractionDigits: 4,
    useGrouping: false,
  })}%`;

  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <StyledProgress
        percent={isIndeterminate ? 50 : value}
        $isIndeterminate={isIndeterminate}
      />
      {!isIndeterminate && (
        <div style={{ flexGrow: 1, paddingLeft: 10 }}>{textValue}</div>
      )}
    </div>
  );
};
