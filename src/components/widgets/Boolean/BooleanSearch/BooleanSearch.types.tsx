import { LocaleType } from "@/context/LocaleContext";

export type BooleanSearchProps = LocaleType & {
  name: string;
  onChange?: (value: any) => void;
  value?: string;
};
