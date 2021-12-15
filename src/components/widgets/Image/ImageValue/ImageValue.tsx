import React from "react";
import { ImageValueProps } from "./ImageValue.types";

export const ImageValue = (props: ImageValueProps) => {
  const { value } = props;
  return (
    <img src={`data:image/*;base64,${value}`} style={{ maxWidth: "100px" }} />
  );
};
