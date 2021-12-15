import React from "react";

export const TextValue = ({ value }: { value: string }) => {
  return <div style={{ whiteSpace: "pre-line" }}>{value}</div>;
};
