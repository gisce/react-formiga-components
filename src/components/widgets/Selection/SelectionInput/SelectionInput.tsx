import React from "react";
import { Select } from "antd";
import { SelectionInputProps } from "./SelectionInput.types";
import { RequiredSelect } from "./SelectionInput.styles";

const { Option } = Select;

export const SelectionInput = (props: SelectionInputProps) => {
  const { selectionValues, readOnly, required, onChange, value } = props;

  const options = Object.keys(selectionValues).map((key) => {
    const entryValue = selectionValues[key];
    return (
      <Option key={key} value={key}>
        {entryValue}
      </Option>
    );
  });

  const CustomSelect: any = required && !readOnly ? RequiredSelect : Select;

  const filteredValue = selectionValues[value] !== undefined ? value : "";

  return (
    <CustomSelect disabled={readOnly} onChange={onChange} value={filteredValue}>
      {options}
    </CustomSelect>
  );
};
