import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharInput } from ".";
import { BaseFieldArgTypes } from "components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Char/CharInput",
  component: CharInput,
  argTypes: {
    ...BaseFieldArgTypes,
    isPassword: {
      description: "The input is a password",
      table: { defaultValue: { summary: false }, category: "Char specific" },
    },
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof CharInput>;

const Template: ComponentStory<typeof CharInput> = (args) => (
  <CharInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  isPassword: false,
};

export const Password = Template.bind({});
Password.args = {
  required: false,
  readOnly: false,
  isPassword: true,
};
