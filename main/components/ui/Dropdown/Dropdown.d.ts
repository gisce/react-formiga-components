/// <reference types="react" />
import { DropdownRef } from "./Dropdown.types";
export declare const Dropdown: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./Dropdown.types").BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<DropdownRef>>>;
//# sourceMappingURL=Dropdown.d.ts.map