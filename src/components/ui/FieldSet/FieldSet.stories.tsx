import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FieldSet } from "./FieldSet";

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
