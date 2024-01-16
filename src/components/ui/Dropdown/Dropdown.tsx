import { memo, useCallback, useState } from "react";
import { Dropdown as AntDropdown } from "antd";
import { DropdownProps } from "./Dropdown.types";
import { DropdownMenu, flattenDropdownItems } from "./DropdownMenu";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export const Dropdown: React.FC<DropdownProps> = memo(
  ({
    onRetrieveData,
    onItemClick,
    disabled = false,
    searchable = "auto",
    children,
    trigger = ["click"],
    placement,
    maxHeight,
  }: DropdownProps) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [emptyMenu, setEmptyMenu] = useState(false);

    const onRetrieveDataCallback = useCallback(async () => {
      const data = await onRetrieveData?.();
      setEmptyMenu(flattenDropdownItems(data).length === 0);
      return data;
    }, [onRetrieveData]);

    return (
      <ErrorBoundary>
        <AntDropdown
          dropdownRender={() => {
            return (
              <DropdownMenu
                maxHeight={maxHeight}
                searchable={searchable}
                onRetrieveData={onRetrieveDataCallback}
                onItemClick={(item) => {
                  setInternalOpen(false);
                  onItemClick?.(item);
                }}
              />
            );
          }}
          disabled={emptyMenu || disabled}
          trigger={trigger}
          placement={placement}
          onOpenChange={(open) => {
            setInternalOpen(open);
          }}
          open={internalOpen}
          destroyPopupOnHide
        >
          {children}
        </AntDropdown>
      </ErrorBoundary>
    );
  },
);

Dropdown.displayName = "Dropdown";
