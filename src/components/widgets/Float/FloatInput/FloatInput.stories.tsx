import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatInput } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Float/FloatInput",
  component: FloatInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
    decimalDigits: {
      description: "Number of decimal digits",
      table: {
        defaultValue: { summary: false },
        category: "Float input specific",
      },
    },
  },
} as ComponentMeta<typeof FloatInput>;

const Template: ComponentStory<typeof FloatInput> = (args) => (
  <FloatInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  decimalDigits: 2,
};
