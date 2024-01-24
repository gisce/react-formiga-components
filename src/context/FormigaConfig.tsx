import { ReactNode, createContext, memo, useContext } from "react";
import { Locale, LocaleContextProvider, Strings } from "./LocaleContext";

interface FormigaConfigProps {
  locale?: Locale;
  localizedStrings?: Strings;
  children?: ReactNode;
}

type FormigaContextValues = {};
const defaultFormigaConfig: FormigaContextValues = {};

export const FormigaConfig =
  createContext<FormigaContextValues>(defaultFormigaConfig);

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
  ({ children, locale, localizedStrings }: FormigaConfigProps): ReactNode => {
    // const providerValue = useMemo(
    //   () => ({
    //     locale,
    //   }),
    //   [locale],
    // );

    return (
      <FormigaConfig.Provider value={{}}>
        <LocaleContextProvider
          locale={locale}
          localizedStrings={localizedStrings}
        >
          {children}
        </LocaleContextProvider>
      </FormigaConfig.Provider>
    );
  },
);
FormigaConfigProvider.displayName = "FormigaConfigProvider";
