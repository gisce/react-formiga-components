import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Many2OneValue } from "./Many2OneValue";
import { Many2OneSuffix } from "../Many2OneSuffix/Many2OneSuffix";
import { Menu } from "antd";
import {
  PrinterOutlined,
  ThunderboltOutlined,
  EnterOutlined,
} from "@ant-design/icons";

export default {
  title: "Work in progress/Widgets/Many2One/Many2OneValue",
  component: Many2OneValue,
} as ComponentMeta<typeof Many2OneValue>;

const Template: ComponentStory<typeof Many2OneValue> = (args) => {
  return <Many2OneValue {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  value: "Customer #23",
};

export const BasicWithSuffix = Template.bind({});
BasicWithSuffix.args = {
  value: "Customer #23",
  // suffix: (
  //   <Many2OneSuffix
  //     loading={false}
  //     menuItems={
  //       <>
  //         <Menu.Item key="action_1" icon={<ThunderboltOutlined />}>
  //           action_1
  //         </Menu.Item>
  //         <Menu.Item key="action_2" icon={<PrinterOutlined />}>
  //           action_2
  //         </Menu.Item>
  //         <Menu.Item key="action_3" icon={<EnterOutlined />}>
  //           action_3
  //         </Menu.Item>
  //       </>
  //     }
  //     onMenuItemClicked={(e) => {
  //       action("onMenuItemClicked")(e);
  //     }}
  //     onSuffixExpandClicked={() => {
  //       action("onSuffixExpandClicked")();
  //     }}
  //   />
  // ),
};
