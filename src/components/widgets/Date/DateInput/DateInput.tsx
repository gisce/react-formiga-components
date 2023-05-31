import { DatePicker } from "antd";
import React from "react";
import dayjs from "dayjs";
import { DatePickerInputProps } from "./DateInput.types";
import { RequiredDatePicker } from "./DateInput.styles";

const DatePickerConfig = {
  date: {
    placeholder: "__/__/____",
    dateDisplayFormat: "",
    dateInternalFormat: "",
  },
  time: {
    placeholder: "__/__/____ __:__:__",
    dateDisplayFormat: "",
    dateInternalFormat: "",
  },
};

export const DateInput: React.FC<DatePickerInputProps> = (
  props: DatePickerInputProps
) => {
  const { value, onChange, readOnly, required, showTime } = props;
  const mode = showTime ? "time" : "date";
  const InputComponent: any =
    required && !readOnly ? RequiredDatePicker : DatePicker;

  function triggerChange(changedValue: undefined | string) {
    onChange?.(changedValue);
  }

  function onValueStringChange(momentDate: any) {
    if (momentDate === null) {
      triggerChange(undefined);
      return;
    }

    triggerChange(momentDate.format(DatePickerConfig[mode].dateInternalFormat));
  }

  const showTimeParms = showTime
    ? { defaultValue: dayjs("00:00:00", "HH:mm:ss") }
    : undefined;
  const dateValue = value ? dayjs(value) : undefined;

  return (
    <InputComponent
      style={{ width: "100%" }}
      placeholder={
        showTime
          ? DatePickerConfig.time.placeholder
          : DatePickerConfig.date.placeholder
      }
      disabled={readOnly}
      showTime={showTimeParms}
      format={DatePickerConfig[mode].dateDisplayFormat}
      value={dateValue}
      onChange={onValueStringChange}
    ></InputComponent>
  );
};
