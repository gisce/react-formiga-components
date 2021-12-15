import { BaseFieldProps } from "components/form/Field";

export type TextInputProps = BaseFieldProps<string> & {
  height?: number;
};

export type TextAreaStyledProps = {
  height: string;
};
