import React from "react";
import isURL from "validator/lib/isURL";
import { LinkInput } from "../LinkInput";
import { BaseFieldProps } from "index";

export const UrlInput = (props: BaseFieldProps<string>) => {
  return (
    <LinkInput
      {...props}
      linkPrefix={"mailto:"}
      valueValidator={(value) => {
        if (!value) {
          return false;
        }
        return isURL(value);
      }}
    />
  );
};
