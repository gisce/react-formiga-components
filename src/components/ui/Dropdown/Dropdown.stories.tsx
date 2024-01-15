import { FC } from "react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const DropdownWrapper = ({}) => {
  // Additional logic or state can be added here if needed

  const handleToggle = () => {
    console.log("Dropdown toggled");
  };

  return <Dropdown />;
};

const Template: FC<any> = (args) => <DropdownWrapper {...args} />;

export const Default = Template.bind({});
