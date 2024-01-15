import { FC } from "react";
import { DropdownButton } from "./DropdownButton";
import { MobileOutlined } from "@ant-design/icons";
import { Default as DefaultStory } from "./Dropdown.stories";
import { DropdownButtonProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown/DropdownButton",
  component: DropdownButton,
};

const Template: FC<DropdownButtonProps> = (args) => (
  <DropdownButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: DefaultStory.exampleData,
  label: "Dropdown",
  icon: <MobileOutlined />,
};
