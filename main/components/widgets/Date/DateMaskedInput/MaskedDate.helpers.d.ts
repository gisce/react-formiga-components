import { Dayjs } from "dayjs";
export declare const MaskedDateConfig: {
    readonly placeholder: "__/__/____";
    readonly displayFormat: "DD/MM/YYYY";
    readonly internalFormat: "YYYY-MM-DD";
    readonly mask: "00/00/0000";
};
export declare const MaskedDateTimeConfig: {
    readonly placeholder: "__/__/____ __:__:__";
    readonly displayFormat: "DD/MM/YYYY HH:mm:ss";
    readonly internalFormat: "YYYY-MM-DD HH:mm:ss";
    readonly mask: "00/00/0000 00:00:00";
};
export declare const MaskedTimeConfig: {
    readonly placeholder: "__:__:__";
    readonly displayFormat: "HH:mm:ss";
    readonly internalFormat: "HH:mm:ss";
    readonly mask: "00:00:00";
};
export type AutocompleteResult = {
    displayValue: string;
    internalValue: string;
} | null;
export declare const autocompleteDate: (inputValue: string, now?: Dayjs) => AutocompleteResult;
export declare const autocompleteDateTime: (inputValue: string, now?: Dayjs) => AutocompleteResult;
export declare const autocompleteTime: (inputValue: string, now?: Dayjs, useZeros?: boolean) => AutocompleteResult;
export declare const parseInternalToDisplay: (value: string | undefined, internalFormat: string, displayFormat: string, timezone?: string) => string;
export declare const parseDisplayToInternal: (value: string, displayFormat: string, internalFormat: string, timezone?: string) => string | null;
export declare const isCompleteValue: (value: string, placeholder: string) => boolean;
export declare const hasAnyDigits: (value: string) => boolean;
//# sourceMappingURL=MaskedDate.helpers.d.ts.map