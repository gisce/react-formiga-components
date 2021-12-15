import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Many2OneDummy } from "./Many2OneDummy";
import { BaseFieldArgTypes } from "components/form/Field/BaseField.argTypes";
import { Many2oneSuffix } from "../Many2OneSuffix/Many2OneSuffix";
import { Menu } from "antd";
import {
  PrinterOutlined,
  ThunderboltOutlined,
  EnterOutlined,
} from "@ant-design/icons";

export default {
  title: "Components/Widgets/Many2One/Many2OneDummy",
  component: Many2OneDummy,
  argTypes: {
    ...BaseFieldArgTypes,
  },
} as ComponentMeta<typeof Many2OneDummy>;

const Template: ComponentStory<typeof Many2OneDummy> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Many2OneDummy
      {...args}
      value={value}
      onChange={(value: string) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  readOnly: false,
  required: false,
  locale: "en_US",
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: false,
  disableSearchButton: false,
};

export const Required = Template.bind({});
Required.args = {
  readOnly: false,
  required: true,
  locale: "en_US",
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: false,
  disableSearchButton: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  required: false,
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: false,
  disableSearchButton: false,
  value: "Customer # 1",
};

export const Searching = Template.bind({});
Searching.args = {
  readOnly: false,
  required: false,
  showFolderButton: true,
  showSearchButton: true,
  searching: true,
  disableFolderButton: false,
  disableSearchButton: false,
  value: "Customer # 1",
};

export const SearchingRequired = Template.bind({});
SearchingRequired.args = {
  readOnly: false,
  required: true,
  showFolderButton: true,
  showSearchButton: true,
  searching: true,
  disableFolderButton: false,
  disableSearchButton: false,
  value: "Customer # 1",
};

export const NoButtons = Template.bind({});
NoButtons.args = {
  readOnly: false,
  required: true,
  showFolderButton: false,
  showSearchButton: false,
  searching: false,
  disableFolderButton: false,
  disableSearchButton: false,
  value: "Customer # 1",
};

export const ButtonsDisabled = Template.bind({});
ButtonsDisabled.args = {
  readOnly: false,
  required: false,
  locale: "en_US",
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: true,
  disableSearchButton: true,
};

export const WithSuffixLoading = Template.bind({});
WithSuffixLoading.args = {
  readOnly: false,
  required: false,
  locale: "en_US",
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: true,
  disableSearchButton: true,
  suffix: (
    <Many2oneSuffix
      loading={true}
      menuItems={<></>}
      onMenuItemClicked={(e) => {
        action("onMenuItemClicked")(e);
      }}
      onSuffixExpandClicked={() => {
        action("onSuffixExpandClicked");
      }}
    />
  ),
};

export const WithSuffixWithOptions = Template.bind({});
WithSuffixWithOptions.args = {
  readOnly: false,
  required: false,
  locale: "en_US",
  showFolderButton: true,
  showSearchButton: true,
  searching: false,
  disableFolderButton: true,
  disableSearchButton: true,
  suffix: (
    <Many2oneSuffix
      loading={false}
      menuItems={
        <>
          <Menu.Item key="action_1" icon={<ThunderboltOutlined />}>
            action_1
          </Menu.Item>
          <Menu.Item key="action_2" icon={<PrinterOutlined />}>
            action_2
          </Menu.Item>
          <Menu.Item key="action_3" icon={<EnterOutlined />}>
            action_3
          </Menu.Item>
        </>
      }
      onMenuItemClicked={(e) => {
        action("onMenuItemClicked")(e);
      }}
      onSuffixExpandClicked={() => {
        action("onSuffixExpandClicked")();
      }}
    />
  ),
};
