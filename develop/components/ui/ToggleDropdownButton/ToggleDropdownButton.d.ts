/// <reference types="react" />
import { ToggleDropdownButtonRef } from "./ToggleDropdownButton.types";
export declare const ToggleDropdownButtonComponent: import("react").ForwardRefExoticComponent<{
    isActive: boolean;
    onToggle: () => void;
    activeIcon: import("react").ReactNode;
    inactiveIcon: import("react").ReactNode;
} & import('../../../components').BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<ToggleDropdownButtonRef>>;
export declare const ToggleDropdownButton: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<{
    isActive: boolean;
    onToggle: () => void;
    activeIcon: import("react").ReactNode;
    inactiveIcon: import("react").ReactNode;
} & import('../../../components').BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<ToggleDropdownButtonRef>>>;
//# sourceMappingURL=ToggleDropdownButton.d.ts.map