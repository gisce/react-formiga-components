import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Work in progress/Widgets/Text/TextInput",
  component: TextInput,
  argTypes: {
    ...BaseFieldArgTypes,
    height: {
      description: "Height of the field in px",
      table: { defaultValue: { summary: "100%" }, category: "Text specific" },
    },
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  height: 200,
};
