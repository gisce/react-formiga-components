/// <reference types="react" />
import { DropdownRef } from '../../../components';
export declare const FavouriteButton: import("react").ForwardRefExoticComponent<{
    isFavourite: boolean;
    onToggleFavourite: () => void;
} & import('../../../components').BaseDropdownProps & {
    trigger?: ("click" | "hover")[] | undefined;
    disabled?: boolean | undefined;
    children?: import("react").ReactNode;
    placement?: "top" | "bottom" | "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined;
    onOpenChange?: ((open: boolean) => void) | undefined;
} & import("react").RefAttributes<DropdownRef>>;
//# sourceMappingURL=FavouriteButton.d.ts.map