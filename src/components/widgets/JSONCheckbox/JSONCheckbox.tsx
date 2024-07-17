import React, { useState } from "react";
import { BaseFieldProps } from "@/components/form";
import { Checkbox } from "antd";

const humanizeLabel = (key: string): string => {
  return (
    key
      // Reemplaça guions baixos i guions amb espais
      .replace(/[_-]+/g, " ")
      // Converteix a majúscules la primera lletra de cada paraula
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};

export const JSONCheckbox = (
  props: BaseFieldProps<Record<string, boolean>>,
) => {
  const { readOnly } = props;
  const [values, setValues] = useState(props.value || {});

  const handleChange = (key: string) => {
    const newValues = {
      ...values,
      [key]: !values[key],
    };
    setValues(newValues);
    if (props.onChange) {
      props.onChange(newValues);
    }
  };

  return (
    <div>
      {Object.keys(values).map((key) => (
        <Checkbox
          disabled={readOnly}
          key={key}
          checked={values[key]}
          onChange={() => handleChange(key)}
        >
          {humanizeLabel(key)}
        </Checkbox>
      ))}
    </div>
  );
};
