import { ReactElement, useMemo } from "react";
import { DatePickerConfig } from "../DateInput/helpers/DatePicker.helpers";
import dayjs from "@/helpers/dayjs";

export const DateTimeValue = ({
  value,
  timezone = "Europe/Madrid",
}: {
  value: any;
  timezone?: string;
}): ReactElement => {
  return useMemo(() => {
    if (!value || (value && value.length === 0)) return <></>;
    const formattedValue = dayjs
      .tz(
        value,
        DatePickerConfig.time.dateInternalFormat,
        timezone || "Europe/Madrid",
      )
      .format(DatePickerConfig.time.dateDisplayFormat);
    return <>{formattedValue}</>;
  }, [value, timezone]);
};
