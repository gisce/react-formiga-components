import { strings } from "@/locales";
import { createContext, memo, useCallback, useContext, useMemo } from "react";

const DEFAULT_LOCALE = "en_US";

export type Locale = "es_ES" | "en_US" | "ca_ES";

export type LocaleType = {
  locale?: Locale;
};

export type LocaleContextType = {
  locale: Locale;
  t: (key: string) => string;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined,
);

export type Strings = Record<string, Record<string, string>>;

type LocaleContextProps = {
  locale?: Locale;
  children?: React.ReactNode;
  localizedStrings?: Strings;
};

export const LocaleContextProvider = memo(
  ({
    children,
    locale = DEFAULT_LOCALE,
    localizedStrings = {},
  }: LocaleContextProps) => {
    const mergedStrings = useMemo(() => {
      return mergeStrings(strings, localizedStrings);
    }, [localizedStrings]);

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
  const translated = mergeStrings(strings, inlineStrings)[locale]?.[key];
  return translated || key;
};

export const mergeStrings = (a: Strings, b: Strings): Strings => {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  const merged = Array.from(keys).reduce<Strings>((acc, key) => {
    acc[key] = {
      ...(a[key] || {}),
      ...(b[key] || {}),
    };
    return acc;
  }, {});
  return merged;
};
