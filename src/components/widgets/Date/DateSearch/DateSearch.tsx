import React from "react";
import { DatePicker } from "antd";
import { DateSearchProps } from "./DateSearch.types";
import { Moment } from "moment";
import {
  convertMomentDateArrayToStringArray,
  getMomentValue,
} from "./DateSearch.helper";

const defaultDateFormat = "DD/MM/YYYY";

export const DateSearch = (props: DateSearchProps) => {
  const { value, onChange } = props;

  const momentValue = getMomentValue(value);

  return (
    <DatePicker.RangePicker
      data-datepicker-id="datepicker-input"
      allowEmpty={[true, true]}
      format={defaultDateFormat}
      value={momentValue as any}
      onChange={(momentValues: Moment[]) => {
        onChange(
          convertMomentDateArrayToStringArray(momentValues) as [string, string]
        );
      }}
    ></DatePicker.RangePicker>
  );
};
