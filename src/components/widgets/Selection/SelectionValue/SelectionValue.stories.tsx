import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectionValue } from ".";

const selectionValues = {
  "1": "One",
  "2": "Two",
  "3": "Three",
};

export default {
  title: "Components/Widgets/Selection/SelectionValue",
  component: SelectionValue,
} as ComponentMeta<typeof SelectionValue>;

const Template: ComponentStory<typeof SelectionValue> = (args) => (
  <SelectionValue {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  selectionValues,
  value: "2",
};
