import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import { CheckboxContainer, RequiredCheckbox } from "./BooleanInput.styles";
import { BaseFieldProps } from "@/components/form";

export const BooleanInput = (props: BaseFieldProps<boolean>) => {
  const { required, readOnly, value, onChange, ...restProps } = props;

  const CustomCheckbox: any =
    required && !readOnly ? RequiredCheckbox : AntCheckbox;

  return (
    <CheckboxContainer data-testid="checkbox_container">
      <CustomCheckbox
        {...restProps}
        data-testid="checkbox_input"
        disabled={readOnly}
        checked={value}
        onChange={(event: { target: { checked: boolean } }) => {
          onChange(event.target.checked);
        }}
      />
    </CheckboxContainer>
  );
};
