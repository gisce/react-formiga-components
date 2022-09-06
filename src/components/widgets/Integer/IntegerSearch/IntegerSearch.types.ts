import { ValueOnChange } from "@/components";

export type IntegerSearchProps = ValueOnChange<[number, number]> & {
  name: string;
};
