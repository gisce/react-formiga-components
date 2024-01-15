import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharSearch } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Work in progress/Widgets/Char/CharSearch",
  component: CharSearch,
  argTypes: {
    ...BaseFieldArgTypes,
    isPassword: { table: { disable: true } },
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof CharSearch>;

const Template: ComponentStory<typeof CharSearch> = (args) => (
  <CharSearch {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
};
