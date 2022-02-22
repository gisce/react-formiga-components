import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dashboard } from "index";

export default {
  title: "Components/Dashboard/Dashboard",
  component: Dashboard,
  argTypes: {
    children: { table: { disable: true }, control: { disable: true } },
    onFieldsChange: { control: { disable: true } },
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => {
  return <Dashboard {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {};
