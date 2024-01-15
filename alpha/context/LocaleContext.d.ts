import React from "react";
export type Locale = "es_ES" | "en_US" | "ca_ES";
export type LocaleType = {
    locale?: Locale;
};
export type LocaleContextType = {
    lang: string;
    t: (key: string) => string;
};
export declare const LocaleContext: React.Context<LocaleContextType | null>;
type LocaleContextProps = {
    children: React.ReactNode;
    lang: string;
    locales?: {
        [key: string]: {
            [key: string]: string;
        };
    };
};
export declare const LocaleContextProvider: (props: LocaleContextProps) => any;
export declare const tForLang: (key: string, lang: string) => any;
export declare const tForLangContext: (key: string, locale?: string, tContext?: Function) => any;
export {};
//# sourceMappingURL=LocaleContext.d.ts.map