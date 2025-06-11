import { DatePicker } from "antd";
import { useDatePickerLocale } from "../DateInput/hooks/useDatePickerLocale";
import { DateRangeInputProps } from "./DateRangeInput.types";

export const DateRangeInput = (props: DateRangeInputProps) => {
  const { className = "w-full" } = props;
  const datePickerLocale = useDatePickerLocale();

  return (
    <DatePicker.RangePicker
      allowEmpty={[true, true]}
      format={"DD/MM/YYYY"}
      locale={datePickerLocale}
      style={{ width: "100%" }}
      className={className}
    />
  );
};
