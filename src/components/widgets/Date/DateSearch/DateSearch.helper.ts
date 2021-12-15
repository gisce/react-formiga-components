import moment, { Moment } from "moment";
import { defaultDateFormat } from "./DateSearch.types";

export const getMomentValue = (value: [string, string]) => {
  return (
    value && [
      value[0] ? moment(value[0]) : null,
      value[1] ? moment(value[1]) : null,
    ]
  );
};

export const convertMomentDateArrayToStringArray = (momentValues: Moment[]) => {
  const from = momentValues[0] ? momentValues[0].format(defaultDateFormat) : null;
  const to = momentValues[1] ? momentValues[1].format(defaultDateFormat) : null;
  return [from, to];
};
