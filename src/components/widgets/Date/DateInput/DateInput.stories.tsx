import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DateInput } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

const category = "Date specific";

export default {
  title: "Work in progress/Widgets/Date/DateInput",
  component: DateInput,
  argTypes: {
    ...BaseFieldArgTypes,
    showTime: {
      description: "Enable time for picking values",
      table: {
        defaultValue: { summary: false },
        category,
      },
    },
    onChange: {
      action: "onChange",
      table: {
        category,
      },
    },
    value: {
      table: {
        category,
      },
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  showTime: false,
};

export const BasicWithTime = Template.bind({});
BasicWithTime.args = {
  required: false,
  readOnly: false,
  showTime: true,
};
