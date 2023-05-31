import moment, { Moment } from "moment";
import { defaultDateFormat } from "../DateSearch/DateSearch.types";
import {
  defaultTimeFormat,
  defaultDateForTimeValue,
} from "./DateTimeSearch.types";

export const getMomentDateValue = (
  value: [[string, string], [string, string]]
) => {
  return value && value[0]
    ? [
        value[0][0] ? dayjs(value[0][0], defaultDateFormat) : null,
        value[0][1] ? dayjs(value[0][1], defaultDateFormat) : null,
      ]
    : [null, null];
};

export const getMomentTimeValue = (
  value: [[string, string], [string, string]]
) => {
  return value && value[1]
    ? [
        value[1][0]
          ? dayjs(
              defaultDateForTimeValue + " " + value[1][0],
              `${defaultDateFormat} ${defaultTimeFormat}`
            )
          : null,
        value[1][1]
          ? dayjs(
              defaultDateForTimeValue + " " + value[1][1],
              `${defaultDateFormat} ${defaultTimeFormat}`
            )
          : null,
      ]
    : [null, null];
};

export const convertMomentDateArrayToStringArray = (momentValues: Moment[]) => {
  const fromDate =
    momentValues && momentValues[0]
      ? momentValues[0].format(defaultDateFormat)
      : null;
  const toDate =
    momentValues && momentValues[1]
      ? momentValues[1].format(defaultDateFormat)
      : null;

  return [fromDate, toDate];
};

export const convertMomentTimeArrayToStringArray = (momentValues: Moment[]) => {
  const fromTime =
    momentValues && momentValues[0]
      ? momentValues[0].format(defaultTimeFormat)
      : null;
  const toTime =
    momentValues && momentValues[1]
      ? momentValues[1].format(defaultTimeFormat)
      : null;

  return [fromTime, toTime];
};
