import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { HTMLPreview } from ".";

export default {
  title: "Work in progress/Widgets/HTMLPreview/HTMLPreview",
  component: HTMLPreview,
} as Meta<typeof HTMLPreview>;

const Template: StoryFn<typeof HTMLPreview> = (args: any) => (
  <HTMLPreview {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  value: "<h1>Hola</h1><br/><b>Què tal</b>",
};
