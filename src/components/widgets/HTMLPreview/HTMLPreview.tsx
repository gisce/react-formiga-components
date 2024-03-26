import React from "react";
import { Markup } from "interweave";

export const HTMLPreview = ({ value }: { value: string }) => {
  return <Markup content={value} allowAttributes />;
};
