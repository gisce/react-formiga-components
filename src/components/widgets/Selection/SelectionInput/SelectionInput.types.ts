import { BaseFieldProps } from "@/components/form/Field";

export type SelectionInputProps = BaseFieldProps<any> & {
  selectionValues: { [key: string]: string };
};
