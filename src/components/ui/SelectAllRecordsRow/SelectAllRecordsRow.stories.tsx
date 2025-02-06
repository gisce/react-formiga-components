import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectAllRecordsRow } from "./SelectAllRecordsRow";

export default {
  title: "Components/UI/SelectAllRecordsRow",
  component: SelectAllRecordsRow,
} as ComponentMeta<typeof SelectAllRecordsRow>;

const Template: ComponentStory<typeof SelectAllRecordsRow> = (args) => {
  return <SelectAllRecordsRow {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  numberOfVisibleSelectedRows: 10,
  numberOfRealSelectedRows: 10,
  numberOfTotalRows: 100,
  totalRecords: 100,
  onSelectAllRecords: async () => {
    console.log("Select all records clicked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  numberOfVisibleSelectedRows: 100,
  numberOfRealSelectedRows: 100,
  numberOfTotalRows: 100,
  totalRecords: 100,
  onSelectAllRecords: async () => {
    console.log("Select all records clicked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};
