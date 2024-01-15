import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "./Label";

export default {
  title: "Work in progress/UI/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: "Label text",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  text: "Label text",
  tooltip: "Tooltip text",
};
