import {
  memo,
  useCallback,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Dropdown as AntDropdown } from "antd";
import { DropdownProps, DropdownRef } from "./Dropdown.types";
import { DropdownMenu, flattenDropdownItems } from "./DropdownMenu";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const DropdownComponent = forwardRef<DropdownRef, DropdownProps>(
  (
    {
      onRetrieveData,
      onItemClick,
      disabled = false,
      searchable = "auto",
      children,
      trigger = ["click"],
      placement,
      maxHeight = 300,
      header,
      onOpenChange,
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [emptyMenu, setEmptyMenu] = useState(false);

    const onRetrieveDataCallback = useCallback(async () => {
      const data = await onRetrieveData?.();
      setEmptyMenu(flattenDropdownItems(data).length === 0);
      return data;
    }, [onRetrieveData]);

    useImperativeHandle(ref, () => ({
      close: () => setInternalOpen(false),
    }));

    return (
      <ErrorBoundary>
        <AntDropdown
          dropdownRender={() => {
            return (
              <DropdownMenu
                header={header}
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
            onOpenChange?.(open);
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

export const Dropdown = memo(DropdownComponent);
DropdownComponent.displayName = "DropdownComponent";
Dropdown.displayName = "Dropdown";
