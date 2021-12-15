import { BaseFieldProps } from "components/form/Field";

export type CharInputProps = BaseFieldProps<string> & {
  isPassword?: boolean;
};
