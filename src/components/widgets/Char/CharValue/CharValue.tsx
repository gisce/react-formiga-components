import React from "react";

export const CharValue = ({ value }: { value?: string }) => {
  return <>{value || ""}</>;
};
