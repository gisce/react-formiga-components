import { memo, useState } from "react";
import { Dropdown as AntDropdown } from "antd";
import { DropdownProps } from "./Dropdown.types";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown: React.FC<DropdownProps> = memo(
  ({
    data = [],
    onItemClick,
    disabled = false,
    searchable = "auto",
    children,
    trigger = ["click"],
  }: DropdownProps) => {
    const [internalOpen, setInternalOpen] = useState(false);

    return (
      <AntDropdown
        dropdownRender={() => {
          return (
            <DropdownMenu
              searchable={searchable}
              data={data}
              onItemClick={(item) => {
                setInternalOpen(false);
                onItemClick?.(item);
              }}
            />
          );
        }}
        disabled={disabled || data.length === 0}
        trigger={trigger}
        onOpenChange={(open) => {
          setInternalOpen(open);
        }}
        open={internalOpen}
        destroyPopupOnHide
      >
        {children}
      </AntDropdown>
    );
  },
);

Dropdown.displayName = "Dropdown";
