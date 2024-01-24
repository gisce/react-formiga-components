/// <reference types="react" />
export declare const StyledRow: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("antd").RowProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const StyledCol: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("antd").ColProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FormItemStyled: import("styled-components").StyledComponent<(<Values = any>(props: import("antd").FormItemProps<Values>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    useStatus: () => {
        status?: "" | "error" | "warning" | "success" | "validating" | undefined;
        errors: import("react").ReactNode[];
        warnings: import("react").ReactNode[];
    };
}, any, {}, never>;
export declare const RequiredFieldStyle: import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=Field.styles.d.ts.map