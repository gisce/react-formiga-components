import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  ToggleDropdownButtonProps,
  ToggleDropdownButtonRef,
} from "./ToggleDropdownButton.types";
import { Fragment, forwardRef, memo, useImperativeHandle, useRef } from "react";
import { Dropdown } from "@/components";

export const ToggleDropdownButtonComponent = forwardRef<
  ToggleDropdownButtonRef,
  ToggleDropdownButtonProps
>((props: ToggleDropdownButtonProps, ref) => {
  const { isActive, onToggle, activeIcon, inactiveIcon, disabled, ...rest } =
    props;

  const dropdownRef = useRef<ToggleDropdownButtonRef>(null);

  useImperativeHandle(ref, () => ({
    close: () => dropdownRef.current?.close(),
  }));

  return (
    <div style={{ display: "flex", gap: 0 }}>
      <Button
        disabled={disabled}
        type={isActive ? "primary" : "default"}
        style={{
          width: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          padding: 0,
        }}
        onClick={onToggle}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isActive ? activeIcon : inactiveIcon}
        </div>
      </Button>
      <Dropdown ref={dropdownRef} {...rest} disabled={disabled}>
        <Button
          disabled={disabled}
          style={{
            width: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          icon={<DownOutlined style={{ fontSize: "0.5em" }} />}
          onClick={(e) => e.preventDefault()}
        ></Button>
      </Dropdown>
    </div>
  );
});

export const ToggleDropdownButton = memo(ToggleDropdownButtonComponent);
ToggleDropdownButtonComponent.displayName = "ToggleDropdownButtonComponent";
ToggleDropdownButton.displayName = "ToggleDropdownButton";
