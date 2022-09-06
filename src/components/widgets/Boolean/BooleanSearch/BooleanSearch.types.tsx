import { LocaleType } from "@/context/LocaleContext";

export type BooleanSearchProps = LocaleType & {
  onChange?: (value: any) => void;
  value?: string;
};
