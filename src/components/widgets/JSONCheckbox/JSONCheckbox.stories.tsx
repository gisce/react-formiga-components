import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { JSONCheckbox } from ".";

export default {
  title: "Work in progress/Widgets/JSONCheckbox/JSONCheckbox",
  component: JSONCheckbox,
} as Meta<typeof JSONCheckbox>;

const Template: StoryFn<typeof JSONCheckbox> = (args: any) => (
  <JSONCheckbox {...args} onChange={(value) => console.log("value", value)} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: { option_1: false, option_2: true, option_3: false },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: { option_1: false, option_2: true, option_3: false },
  readOnly: true,
};
