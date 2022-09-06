import { BaseFieldProps } from "@/components/form/Field";

export type BaseDatePickerProps = {
  showTime?: boolean;
};

export type DatePickerInputProps = BaseDatePickerProps & BaseFieldProps<string>;
