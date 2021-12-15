import { ValueOnChange } from "components";

export type DateTimeSearchProps = ValueOnChange<
  [[string, string], [string, string]]
>;

export const defaultTimeFormat = "HH:mm";

export const defaultDateForTimeValue = "1970/01/01";