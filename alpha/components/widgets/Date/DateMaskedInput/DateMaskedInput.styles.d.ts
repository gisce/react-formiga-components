/// <reference types="react" />
export declare const DateMaskedInputPickerStyles: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, {
    $required?: import("react").CSSProperties | undefined;
    $disabled?: boolean | undefined;
    $hasError?: boolean | undefined;
    $colorBgContainer?: string | undefined;
}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<(Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Omit<import("imask/esm/index").MaskedDateOptions, "mask"> & {
    mask: DateConstructor;
} & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedDate;
} & Omit<Omit<import("imask/esm/index").MaskedDateOptions, "mask"> & {
    mask: DateConstructor;
}, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Partial<Pick<import("imask/esm/index").MaskedNumber, "mask" | "max" | "min" | "eager" | "format" | "scale" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "radix" | "thousandsSeparator" | "mapToRadix" | "normalizeZeros" | "padFractionalZeros">> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedNumber;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedNumber, "mask" | "max" | "min" | "eager" | "format" | "scale" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "radix" | "thousandsSeparator" | "mapToRadix" | "normalizeZeros" | "padFractionalZeros">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Partial<Pick<import("imask/esm/index").MaskedPattern<string>, "mask" | "eager" | "lazy" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "definitions" | "blocks" | "placeholderChar" | "displayChar">> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedEnum;
} & Omit<import("imask/esm/index").MaskedEnumOptions, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedRange;
} & Omit<import("imask/esm/index").MaskedRangeOptions, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Partial<Pick<import("imask/esm/index").MaskedRegExp, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedRegExp;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedRegExp, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Partial<Pick<import("imask/esm/index").MaskedFunction<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedFunction;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedFunction<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedPattern;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedPattern<string>, "mask" | "eager" | "lazy" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "definitions" | "blocks" | "placeholderChar" | "displayChar">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & Partial<Pick<import("imask/esm/index").MaskedDynamic<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "dispatch">> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").MaskedDynamic;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedDynamic<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "dispatch">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: typeof import("imask/esm/index").Masked;
} & Omit<Partial<Pick<import("imask/esm/index").Masked<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedDate;
} & Omit<Omit<import("imask/esm/index").MaskedDateOptions, "mask"> & {
    mask: DateConstructor;
}, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedNumber;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedNumber, "mask" | "max" | "min" | "eager" | "format" | "scale" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "radix" | "thousandsSeparator" | "mapToRadix" | "normalizeZeros" | "padFractionalZeros">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedEnum;
} & Omit<import("imask/esm/index").MaskedEnumOptions, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedRange;
} & Omit<import("imask/esm/index").MaskedRangeOptions, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedRegExp;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedRegExp, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedFunction<any>;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedFunction<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedPattern<string>;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedPattern<string>, "mask" | "eager" | "lazy" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "definitions" | "blocks" | "placeholderChar" | "displayChar">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").MaskedDynamic<any>;
} & Omit<Partial<Pick<import("imask/esm/index").MaskedDynamic<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix" | "dispatch">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref"> | Omit<import("react-imask").ReactElementProps<HTMLInputElement> & Omit<import("react-imask").ReactMaskProps<HTMLInputElement, {
    [x: string]: unknown;
}>, "ref"> & {
    mask: import("imask/esm/index").Masked<any>;
} & Omit<Partial<Pick<import("imask/esm/index").Masked<any>, "mask" | "eager" | "format" | "parent" | "prepare" | "prepareChar" | "validate" | "commit" | "parse" | "overwrite" | "skipInvalid" | "autofix">>, "mask"> & {
    ref?: import("react").Ref<import("react").ComponentType<import("react-imask").IMaskInputProps<HTMLInputElement>>> | undefined;
}, "ref">) & import("react").RefAttributes<unknown>>, any, {
    $hasError?: boolean | undefined;
    $required?: import("react").CSSProperties | undefined;
    $isEmpty?: boolean | undefined;
    $placeholderColor?: string | undefined;
    $textColor?: string | undefined;
    $colorError?: string | undefined;
    $colorBorder?: string | undefined;
    $colorPrimary?: string | undefined;
    $colorErrorBg?: string | undefined;
    $colorPrimaryBg?: string | undefined;
    $colorTextDisabled?: string | undefined;
    $colorBgContainerDisabled?: string | undefined;
}, never>;
export declare const ClearIcon: import("styled-components").StyledComponent<"span", any, {
    $allowClear?: boolean | undefined;
    $colorTextQuaternary?: string | undefined;
    $colorTextSecondary?: string | undefined;
}, never>;
export declare const CalendarIcon: import("styled-components").StyledComponent<"span", any, {
    $allowClear?: boolean | undefined;
    $colorTextQuaternary?: string | undefined;
    $colorTextSecondary?: string | undefined;
}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, {
    className: "ant-picker-input";
}, "className">;
export declare const HiddenPickerWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
//# sourceMappingURL=DateMaskedInput.styles.d.ts.map