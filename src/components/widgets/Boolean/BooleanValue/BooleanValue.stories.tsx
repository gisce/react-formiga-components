import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BooleanValue } from "./BooleanValue";

export default {
  title: "Work in progress/Widgets/Boolean/BooleanValue",
  component: BooleanValue,
} as ComponentMeta<typeof BooleanValue>;

const Template: ComponentStory<typeof BooleanValue> = (args) => (
  <BooleanValue {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: true,
};
