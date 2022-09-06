import { BaseFieldProps } from "@/components/form/Field";

export type BaseFloatProps = {
  decimalDigits: number;
};

export type FloatInputProps = BaseFieldProps<number> & BaseFloatProps;
