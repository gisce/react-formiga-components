/// <reference types="react" />
import { ButtonProps } from "antd";
export type ButtonWithTooltipProps = ButtonProps & {
    tooltip?: string;
};
export type ButtonFieldProps = ButtonWithTooltipProps & {
    disabled?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    extra?: any;
    loading?: boolean;
    onClick: (payload: ButtonFieldProps) => void;
    fullWidth?: boolean;
};
//# sourceMappingURL=Button.types.d.ts.map