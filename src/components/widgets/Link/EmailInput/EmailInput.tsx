import { BaseFieldProps } from "index";
import React from "react";
import isEmail from "validator/lib/isEmail";
import { LinkInput } from "../LinkInput";

export const EmailInput = (props: BaseFieldProps<string>) => {
  return (
    <LinkInput
      {...props}
      linkPrefix={"mailto:"}
      valueValidator={(value) => {
        if (!value) {
          return false;
        }
        return isEmail(value);
      }}
    />
  );
};
