import { ReactNode, createContext, memo, useContext, useMemo } from "react";
import { Locale, LocaleContextProvider } from "./LocaleContext";

interface FormigaConfigProps {
  locale?: Locale;
}

const defaultFormigaConfig: FormigaConfigProps = {};

export const FormigaConfig =
  createContext<FormigaConfigProps>(defaultFormigaConfig);

export const useFormigaConfig = () => {
  const context = useContext(FormigaConfig);

  if (!context) {
    throw new Error(
      "useFormigaConfig must be used within a FormigaConfigProvider",
    );
  }

  return context;
};

export const FormigaConfigProvider = memo(
  ({
    children,
    locale,
  }: FormigaConfigProps & { children?: ReactNode }): ReactNode => {
    const providerValue = useMemo(
      () => ({
        locale,
      }),
      [locale],
    );

    return (
      <FormigaConfig.Provider value={providerValue}>
        <LocaleContextProvider locale={locale}>
          {children}
        </LocaleContextProvider>
      </FormigaConfig.Provider>
    );
  },
);
FormigaConfigProvider.displayName = "FormigaConfigProvider";
