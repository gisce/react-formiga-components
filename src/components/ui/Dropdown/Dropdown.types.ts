import { ReactNode } from "react";

export type BaseDropdownProps = {
  maxHeight?: number;
  searchable?: true | false | "auto";
  onItemClick?: (item: DropdownMenuItem) => void;
  onRetrieveData: () => Promise<DropdownMenuGroup[]>;
};

declare const Placements: readonly [
  "topLeft",
  "topCenter",
  "topRight",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
  "top",
  "bottom",
];
type Placement = (typeof Placements)[number];

export type DropdownProps = BaseDropdownProps & {
  trigger?: Array<"click" | "hover">;
  disabled?: boolean;
  children?: ReactNode;
  placement?: Placement;
  onOpenChange?: (open: boolean) => void;
};

export type DropdownButtonProps = Omit<DropdownProps, "children"> & {
  icon: ReactNode;
  label?: string;
};

export type DropdownMenuGroup = {
  label?: string;
  icon?: ReactNode;
  items: DropdownMenuItem[];
  sticky?: boolean;
};

export type DropdownMenuItem = DropdownMenuItemType &
  Record<string, any> & {
    id: number | string;
    name?: string;
    icon?: ReactNode;
    disabled?: boolean;
    selected?: boolean;
  };

export type DropdownMenuItemType = {
  type?: "item" | "divider";
};
