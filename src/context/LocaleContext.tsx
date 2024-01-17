import { createContext, memo, useCallback, useContext, useMemo } from "react";
import ca_ES from "@/locales/ca_ES.json";
import en_US from "@/locales/en_US.json";
import es_ES from "@/locales/es_ES.json";

const DEFAULT_LOCALE = "en_US";

const localeStrings: Record<Locale, Record<string, string>> = {
  ca_ES,
  en_US,
  es_ES,
};

export type Locale = "es_ES" | "en_US" | "ca_ES";

export type LocaleType = {
  locale?: Locale;
};

export type LocaleContextType = {
  locale: Locale;
  t: (key: string) => string;
};

const defaultContextValue: LocaleContextType = {
  locale: DEFAULT_LOCALE,
  t: (key: string) => key,
};

export const LocaleContext =
  createContext<LocaleContextType>(defaultContextValue);

type Strings = Record<string, Record<string, string>>;

type LocaleContextProps = {
  locale?: Locale;
  children?: React.ReactNode;
  strings?: Strings;
};

export const LocaleContextProvider = memo(
  ({ children, locale = DEFAULT_LOCALE, strings = {} }: LocaleContextProps) => {
    const mergedStrings = useMemo(() => {
      return { ...localeStrings, ...strings };
    }, [strings]);

    const t = useCallback(
      (key: string): string => {
        return mergedStrings[locale]?.[key] || key;
      },
      [mergedStrings, locale],
    );

    const contextValue = useMemo(
      () => ({
        locale,
        t,
      }),
      [locale, t],
    );

    return (
      <LocaleContext.Provider value={contextValue}>
        {children}
      </LocaleContext.Provider>
    );
  },
);
LocaleContextProvider.displayName = "LocaleContextProvider";

export const useLocale = (propLocale?: Locale): LocaleContextType => {
  const context = useContext(LocaleContext);

  if (propLocale) {
    return {
      locale: propLocale,
      t: (key: string) => tForLang(key, propLocale),
    };
  }

  if (!context) {
    console.error(
      "useLocale must be used within a LocaleContextProvider - assuming default locale value",
    );
    return {
      locale: DEFAULT_LOCALE,
      t: (key: string) => tForLang(key, DEFAULT_LOCALE),
    };
  }

  return context;
};

export const tForLang = (
  key: string,
  locale: Locale,
  inlineStrings: Strings = {},
) => {
  const translated = { ...localeStrings, ...inlineStrings }[locale]?.[key];
  return translated || key;
};
