import { ReactNode } from "react";
import { Locale } from "./LocaleContext";
interface FormigaConfigProps {
    locale?: Locale;
}
export declare const FormigaConfig: import("react").Context<FormigaConfigProps>;
export declare const useFormigaConfig: () => FormigaConfigProps;
export declare const FormigaConfigProvider: import("react").MemoExoticComponent<({ children, locale, }: FormigaConfigProps & {
    children?: ReactNode;
}) => ReactNode>;
export {};
//# sourceMappingURL=FormigaConfig.d.ts.map