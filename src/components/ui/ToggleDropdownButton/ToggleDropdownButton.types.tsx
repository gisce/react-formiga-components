import { DropdownProps } from "@/components";
import { ReactNode } from "react";

export type ToggleDropdownButtonProps = {
  isActive: boolean;
  onToggle: () => void;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
} & DropdownProps;

export type ToggleDropdownButtonRef = {
  close: () => void;
};
