// @TODO: Review this component
// @ts-nocheck
/* eslint-disable */

import { DatePicker } from "antd";
import { DateSearchProps } from "./DateSearch.types";
// import { Dayjs } from "dayjs";
import {
  convertMomentDateArrayToStringArray,
  getMomentValue,
} from "./DateSearch.helper";

const defaultDateFormat = "DD/MM/YYYY";

export const DateSearch = (props: DateSearchProps) => {
  const { value, onChange } = props;

  const momentValue = getMomentValue(value!);

  return (
    <DatePicker.RangePicker
      data-datepicker-id="datepicker-input"
      allowEmpty={[true, true]}
      format={defaultDateFormat}
      value={momentValue as any}
      onChange={(momentValues) => {
        onChange?.(
          convertMomentDateArrayToStringArray(momentValues as any) as [
            string,
            string,
          ],
        );
      }}
    ></DatePicker.RangePicker>
  );
};
