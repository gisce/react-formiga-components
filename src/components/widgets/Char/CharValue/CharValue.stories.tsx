import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharValue } from ".";

export default {
  title: "Components/Widgets/Char/CharValue",
  component: CharValue,
} as ComponentMeta<typeof CharValue>;

const Template: ComponentStory<typeof CharValue> = (args) => (
  <CharValue {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: "char value",
};
