import { ReactNode } from "react";

export type BaseDropdownProps = {
  searchable?: true | false | "auto";
  onItemClick?: (item: DropdownMenuItem) => void;
  onRetrieveData: () => Promise<DropdownMenuGroup[]>;
};

export type DropdownProps = BaseDropdownProps & {
  trigger?: Array<"click" | "hover">;
  disabled?: boolean;
  children?: ReactNode;
};

export type DropdownButtonProps = Omit<DropdownProps, "children"> & {
  icon: ReactNode;
  label?: string;
};

export type DropdownMenuGroup = {
  label: string;
  items: DropdownMenuItem[];
};

export type DropdownMenuItem = Record<string, any> & {
  id: number | string;
  name: string;
};
