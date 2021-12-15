import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { One2ManyTopBar } from "./One2ManyTopBar";

export default {
  title: "Components/Widgets/One2Many/One2ManyTopBar",
  component: One2ManyTopBar,
} as ComponentMeta<typeof One2ManyTopBar>;

const Template: ComponentStory<typeof One2ManyTopBar> = (args) => {
  return <One2ManyTopBar {...args} />;
};

export const BasicTree = Template.bind({});
BasicTree.args = {
  title: "Relationship title",
  mode: "tree",
};

export const BasicForm = Template.bind({});
BasicForm.args = {
  title: "Relationship title",
  mode: "form",
  currentItemIndex: 0,
  totalItems: 3,
};

export const BasicTreeMany2Many = Template.bind({});
BasicTreeMany2Many.args = {
  title: "Relationship title",
  mode: "tree",
  isMany2Many: true,
};

export const BasicFormMany2Many = Template.bind({});
BasicFormMany2Many.args = {
  title: "Relationship title",
  mode: "form",
  currentItemIndex: 0,
  totalItems: 3,
  isMany2Many: true,
};
