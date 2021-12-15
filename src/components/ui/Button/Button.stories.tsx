import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

const buttonSpecificCategory = { category: "Button specific" };

export default {
  title: "Components/UI/Button",
  component: Button,
  argTypes: {
    icon: {
      control: { disable: true },
      description: "Icon component",
      table: { ...buttonSpecificCategory },
    },
    disabled: {
      description: "Enable/disable button",
      table: { defaultValue: { summary: false }, ...buttonSpecificCategory },
    },
    loading: {
      description:
        "Button show's a loading spinner and doesn't respond to onClick",
      table: { defaultValue: { summary: false }, ...buttonSpecificCategory },
    },
    extra: {
      description: "Extra info that will come in the onClick payload",
      table: { defaultValue: { summary: "{}" }, ...buttonSpecificCategory },
    },
    onClick: {
      action: "clicked",
      description:
        "Callback function fired when the button is clicked. Will contain all the props as a payload",
      table: { ...buttonSpecificCategory },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: ["Button caption"],
  disabled: false,
  loading: false,
};
