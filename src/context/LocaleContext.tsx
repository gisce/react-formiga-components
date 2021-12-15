import React from "react";
import ca_ES from "locales/ca_ES.json";
import en_US from "locales/en_US.json";
import es_ES from "locales/es_ES.json";

const localeStrings: any = {
  ca_ES,
  en_US,
  es_ES,
};

export type LocaleType = {
  locale?: "es_ES" | "en_US" | "ca_ES";
};

export type LocaleContextType = {
  lang: string;
  t: (key: string) => string;
};

export const LocaleContext = React.createContext<LocaleContextType | null>(
  null
);

type LocaleContextProps = {
  children: React.ReactNode;
  lang: string;
  locales?: { [key: string]: { [key: string]: string } };
};

export const LocaleContextProvider = (props: LocaleContextProps): any => {
  const { children, lang, locales } = props;

  function t(key: string): string {
    const mergedLocales = { ...localeStrings, ...locales };
    const translated = mergedLocales[lang]?.[key];
    return translated || key;
  }

  return (
    <LocaleContext.Provider
      value={{
        lang,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const tForLang = (key: string, lang: string) => {
  const translated = localeStrings[lang]?.[key];
  return translated || key;
};

export const tForLangContext = (
  key: string,
  locale?: string,
  tContext?: Function
) => {
  if (!tContext && !locale) {
    return tForLang(key, "en_US");
  }

  if (locale) {
    return tForLang(key, locale);
  }

  return tContext?.(key);
};