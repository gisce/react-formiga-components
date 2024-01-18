/// <reference types="react" />
export type Locale = "es_ES" | "en_US" | "ca_ES";
export type LocaleType = {
    locale?: Locale;
};
export type LocaleContextType = {
    locale: Locale;
    t: (key: string) => string;
};
export declare const LocaleContext: import("react").Context<LocaleContextType | undefined>;
export type Strings = Record<string, Record<string, string>>;
type LocaleContextProps = {
    locale?: Locale;
    children?: React.ReactNode;
    localizedStrings?: Strings;
};
export declare const LocaleContextProvider: import("react").MemoExoticComponent<({ children, locale, localizedStrings, }: LocaleContextProps) => import("react/jsx-runtime").JSX.Element>;
export declare const useLocale: (propLocale?: Locale) => LocaleContextType;
export declare const tForLang: (key: string, locale: Locale, inlineStrings?: Strings) => string;
export declare const mergeStrings: (a: Strings, b: Strings) => Strings;
export {};
//# sourceMappingURL=LocaleContext.d.ts.map