import { FC } from "react";
import {
  StarOutlined,
  StarFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { ToggleDropdownButton } from "./ToggleDropdownButton";
import { ToggleDropdownButtonProps } from "./ToggleDropdownButton.types";
import { Default as DefaultStory } from "../Dropdown/Dropdown.stories";

export default {
  title: "Components/UI/ToggleDropdownButton",
  component: ToggleDropdownButton,
};

const Template: FC<ToggleDropdownButtonProps> = (args) => (
  <ToggleDropdownButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  onToggle: () => console.log("Toggle clicked"),
  activeIcon: <StarFilled style={{ fontSize: "150%", color: "white" }} />,
  inactiveIcon: <StarOutlined style={{ fontSize: "150%" }} />,
  onRetrieveData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DefaultStory.exampleData;
  },
  header: <strong>Options</strong>,
  label: "ToggleDropdownButton",
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
};

export const Heart = Template.bind({});
Heart.args = {
  ...Default.args,
  activeIcon: <HeartFilled style={{ fontSize: "150%", color: "white" }} />,
  inactiveIcon: <HeartOutlined style={{ fontSize: "150%" }} />,
  header: <strong>Heart Options</strong>,
};
