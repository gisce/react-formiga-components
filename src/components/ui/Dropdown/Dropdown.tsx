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
  }: DropdownProps) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [internalDisabled, setInternalDisabled] = useState(disabled);

    const onRetrieveDataCallback = useCallback(async () => {
      const data = await onRetrieveData?.();
      if (flattenDropdownItems(data).length === 0) {
        setInternalDisabled(true);
      }
      return data;
    }, [onRetrieveData]);

    return (
      <ErrorBoundary>
        <AntDropdown
          dropdownRender={() => {
            return (
              <DropdownMenu
                searchable={searchable}
                onRetrieveData={onRetrieveDataCallback}
                onItemClick={(item) => {
                  setInternalOpen(false);
                  onItemClick?.(item);
                }}
              />
            );
          }}
          disabled={internalDisabled || disabled}
          trigger={trigger}
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
