import { ReactNode } from "react";
import { Locale, Strings } from "./LocaleContext";
interface FormigaConfigProps {
    locale?: Locale;
    localizedStrings?: Strings;
    children?: ReactNode;
}
type FormigaContextValues = {};
export declare const FormigaConfig: import("react").Context<FormigaContextValues>;
export declare const useFormigaConfig: () => FormigaContextValues;
export declare const FormigaConfigProvider: import("react").MemoExoticComponent<({ children, locale, localizedStrings }: FormigaConfigProps) => ReactNode>;
export {};
//# sourceMappingURL=FormigaConfig.d.ts.map