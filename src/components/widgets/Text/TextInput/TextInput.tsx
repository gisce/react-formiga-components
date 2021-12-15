import React from "react";
import { TextInputProps } from "./TextInput.types";
import { StyledRequiredTextArea, StyledTextArea } from "./TextInput.styles";

export const TextInput = (props: TextInputProps) => {
  const { readOnly, required, height } = props;
  const TextAreaComponent =
    required && !readOnly ? StyledRequiredTextArea : StyledTextArea;
  const heightValue = height ? height + "px" : "100%";

  return (
    <TextAreaComponent disabled={readOnly} height={heightValue} rows={4} />
  );
};
