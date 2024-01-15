import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatTimeValue } from "./FloatTimeValue";

export default {
  title: "Work in progress/Widgets/FloatTime/FloatTimeValue",
  component: FloatTimeValue,
} as ComponentMeta<typeof FloatTimeValue>;

const Template: ComponentStory<typeof FloatTimeValue> = (args) => {
  return <FloatTimeValue {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 2.5,
};
