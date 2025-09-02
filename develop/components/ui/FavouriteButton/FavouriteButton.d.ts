/// <reference types="react" />
import { FavouriteButtonRef } from "./FavouriteButton.types";
export declare const FavouriteButtonComponent: import("react").ForwardRefExoticComponent<{
    isFavourite: boolean;
    onToggleFavourite: () => void;
} & import("..").BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<FavouriteButtonRef>>;
export declare const FavouriteButton: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<{
    isFavourite: boolean;
    onToggleFavourite: () => void;
} & import("..").BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<FavouriteButtonRef>>>;
//# sourceMappingURL=FavouriteButton.d.ts.map