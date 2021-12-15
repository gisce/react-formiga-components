import React from "react";
import { FileInputProps } from "../FileInput/FileInput.types";
import { FileInput } from "../index";

export const FileValue = (props: FileInputProps) => {
  return <FileInput {...props} readOnly={true} />;
};
