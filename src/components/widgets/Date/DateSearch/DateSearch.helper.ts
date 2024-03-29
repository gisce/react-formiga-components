import dayjs, { Dayjs } from "dayjs";
import { defaultDateFormat } from "./DateSearch.types";

export const getMomentValue = (value: [string, string]) => {
  return (
    value && [
      value[0] ? dayjs(value[0]) : null,
      value[1] ? dayjs(value[1]) : null,
    ]
  );
};

export const convertMomentDateArrayToStringArray = (momentValues: Dayjs[]) => {
  const from = momentValues[0]
    ? momentValues[0].format(defaultDateFormat)
    : null;
  const to = momentValues[1] ? momentValues[1].format(defaultDateFormat) : null;
  return [from, to];
};
