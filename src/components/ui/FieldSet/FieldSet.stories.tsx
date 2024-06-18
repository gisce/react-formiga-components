import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FieldSet, ToggleFieldSet } from "./FieldSet";

export default {
  title: "Components/UI/FieldSet",
  component: FieldSet,
  argTypes: {
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof FieldSet>;

const Template: ComponentStory<typeof FieldSet> = (args) => {
  return <FieldSet {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Group of fields",
  children: <>Content</>,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Group of fields",
  icon: () => <span>🔒</span>,
  children: <>Content</>,
};

export const Toggleable = () => {
  return <ToggleFieldSet label="Group of fields">Content</ToggleFieldSet>;
};
