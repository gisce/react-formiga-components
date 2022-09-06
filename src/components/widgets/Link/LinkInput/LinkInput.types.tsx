import { BaseFieldProps } from "@/index";

export type LinkInputProps = BaseFieldProps<string> & {
  valueValidator?: (value?: string) => boolean;
  linkPrefix?: string;
};
