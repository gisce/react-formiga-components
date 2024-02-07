import { FC } from "react";
import { Dropdown } from "./Dropdown";
import { EnterOutlined, MobileOutlined } from "@ant-design/icons";
import { DropdownMenuGroup, DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const exampleData: DropdownMenuGroup[] = [
  {
    sticky: true,
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2", disabled: true },
      { id: 3, type: "divider" },
    ],
  },
  {
    label: "Group 2",
    icon: <MobileOutlined />,
    items: [
      { id: 3, name: "Item 3", icon: <EnterOutlined /> },
      { id: 4, name: "Item 4" },
    ],
  },
  {
    label: "Group 3",
    items: [
      { id: 5, name: "Item 5", selected: true },
      { id: 6, name: "Item 6" },
    ],
  },
  {
    label: "Group 4",
    items: [
      { id: 7, name: "Item 7" },
      { id: 8, name: "Item 8" },
    ],
  },
  {
    label: "Group 5",
    items: [
      { id: 9, name: "Item 9" },
      { id: 10, name: "Item 10" },
    ],
  },
];

const Template: FC<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.exampleData = exampleData;
Default.args = {
  onRetrieveData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return exampleData;
  },
  header: <div>This is a header</div>,
  children: (
    <button
      style={{
        backgroundColor: "#cf2",
        padding: 20,
        borderRadius: 10,
      }}
    >
      Hover me
    </button>
  ),
  trigger: ["hover"],
};
