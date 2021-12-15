import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProgressBarValue } from "./ProgressBarValue";

export default {
  title: "Components/Widgets/ProgressBar/ProgressBarValue",
  component: ProgressBarValue,
} as ComponentMeta<typeof ProgressBarValue>;

const Template: ComponentStory<typeof ProgressBarValue> = (args) => {
  return <ProgressBarValue {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 2.5,
};
