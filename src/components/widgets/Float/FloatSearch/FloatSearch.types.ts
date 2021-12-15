import { BaseFloatProps } from "../index";
import { ValueOnChange } from "components";

export type FloatSearchProps = BaseFloatProps & ValueOnChange<[number, number]>;
