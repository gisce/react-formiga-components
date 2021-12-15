import React, { useEffect, useRef, useState } from "react";
import { parseFloatToString, parseStringToFloat } from "./FloatTime.helper";
import { BaseFieldProps } from "index";
import { RequiredInput, Input } from "./FloatTimeInput.styles";

export const FloatTimeInput = (props: BaseFieldProps<number>) => {
  const { readOnly, required, value, onChange } = props;
  const InputComponent = required && !readOnly ? RequiredInput : Input;
  const inputTextRef = useRef<string>();
  const [inputText, setInputText] = useState<string>();

  useEffect(() => {
    setInputText(parseFloatToString(value!));
  }, [value]);

  const triggerChange = (changedValue?: number) => {
    onChange?.(changedValue);
  };

  function onValueStringChange(e: React.ChangeEvent<HTMLInputElement>) {
    inputTextRef.current = e.target.value;
    setInputText(e.target.value);
  }

  function onElementLostFocus() {
    triggerChange(parseStringToFloat(inputText));
  }

  return (
    <InputComponent
      value={inputText}
      disabled={readOnly}
      placeholder={"00:00"}
      onChange={onValueStringChange}
      onBlur={onElementLostFocus}
    />
  );
};
