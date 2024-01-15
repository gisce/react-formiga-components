import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Separator } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Work in progress/UI/Separator",
  component: Separator,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => {
  return <Separator {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Separator label",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};
