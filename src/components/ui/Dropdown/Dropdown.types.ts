import { ReactNode } from "react";

export type DropdownProps = {
  trigger?: Array<"click" | "hover">;
  onItemClick?: (item: DropdownMenuItem) => void;
  data: DropdownMenuGroup[];
  disabled?: boolean;
  searchable?: true | false | "auto";
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
  id: number;
  name: string;
};

export type DropdownMenu = {
  data: DropdownMenuGroup[];
  searchable: true | false | "auto";
  onItemClick: (event: any) => void;
};
