import React from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Spin } from "antd";
import { Many2OneSuffixProps } from "./Many2OneSuffix.types";

export const Many2oneSuffix = (props: Many2OneSuffixProps) => {
  const { loading, menuItems, onMenuItemClicked, onSuffixExpandClicked } =
    props;

  function menu() {
    if (loading) {
      return (
        <Menu>
          <div style={{ padding: 15 }}>
            <Spin />
          </div>
        </Menu>
      );
    }

    return (
      <Menu
        onClick={(e: any) => {
          onMenuItemClicked(e);
        }}
      >
        {menuItems}
      </Menu>
    );
  }

  return (
    <>
      <Dropdown overlay={menu()} trigger={["click"]}>
        <RightCircleOutlined
          style={{ color: "rgba(0,0,0,.45)" }}
          onClick={(e) => {
            onSuffixExpandClicked();
            e.preventDefault();
          }}
        />
      </Dropdown>
    </>
  );
};
