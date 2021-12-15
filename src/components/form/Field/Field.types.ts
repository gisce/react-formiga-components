import { LocaleType } from "context/LocaleContext";

export type LabelOptions = {
  layout?: "horizontal" | "vertical";
  text: string;
  tooltip?: string;
  align?: "left" | "center" | "right";
};

export type ValidatorOptions = {
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "enum"
    | "date"
    | "url"
    | "hex"
    | "email";
  validator?: (value: any) => Promise<void | any> | void;
};

export type BaseFieldProps<ValueType> = LocaleType &
  ValueOnChange<ValueType> & {
    readOnly?: boolean;
    required?: boolean;
  };

export type ValueOnChange<ValueType> = {
  value?: ValueType;
  onChange?: (value: ValueType) => void;
};

export type FieldProps = LocaleType & {
  name: string;
  required?: boolean;
  labelOpts?: LabelOptions;
  validatorOpts?: ValidatorOptions;
  valuePropName?: string;
  children?: React.ReactNode;
};
