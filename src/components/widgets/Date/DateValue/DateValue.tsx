import { ReactElement, useMemo } from "react";
import { DatePickerConfig } from "../DateInput/helpers/DatePicker.helpers";
import dayjs from "@/helpers/dayjs";

export const DateValue = ({ value }: { value: any }): ReactElement => {
  return useMemo(() => {
    if (!value || (value && value.length === 0)) return <></>;

    const formattedValue = dayjs(
      value,
      DatePickerConfig.date.dateInternalFormat,
    ).format(DatePickerConfig.date.dateDisplayFormat);
    return <>{formattedValue}</>;
  }, [value]);
};
