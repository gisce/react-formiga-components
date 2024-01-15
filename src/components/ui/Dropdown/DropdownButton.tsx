import { memo } from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "./Dropdown";
import { DropdownButtonProps } from "./Dropdown.types";

export const DropdownButton: React.FC<DropdownButtonProps> = memo(
  ({ icon, label, ...restProps }: DropdownButtonProps) => {
    return (
      <Dropdown {...restProps}>
        <Button>
          {icon} {label} <DownOutlined />
        </Button>
      </Dropdown>
    );
  },
);

DropdownButton.displayName = "DropdownButton";
