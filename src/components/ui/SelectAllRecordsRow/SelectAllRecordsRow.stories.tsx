import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectAllRecordsRow } from "./SelectAllRecordsRow";

export default {
  title: "Components/UI/SelectAllRecordsRow",
  component: SelectAllRecordsRow,
  parameters: {
    docs: {
      description: {
        component:
          "A component that appears when all records in the current page are selected, offering the option to select all records across all pages.",
      },
    },
  },
} as ComponentMeta<typeof SelectAllRecordsRow>;

const Template: ComponentStory<typeof SelectAllRecordsRow> = (args) => {
  return <SelectAllRecordsRow {...args} />;
};

export const CurrentPageSelected = Template.bind({});
CurrentPageSelected.args = {
  currentPageSelectedCount: 10, // All 10 records in current page are selected
  currentPageTotalCount: 10, // Current page has 10 records
  totalRecordsCount: 100, // We have 100 records in total
  totalSelectedCount: 10, // Only the current page (10 records) are selected
  onSelectAllRecords: async () => {
    console.log("Select all records clicked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};
CurrentPageSelected.parameters = {
  docs: {
    description: {
      story:
        "Shows when all records in the current page are selected, offering the option to select all records across all pages.",
    },
  },
};

export const AllPagesSelected = Template.bind({});
AllPagesSelected.args = {
  currentPageSelectedCount: 10, // All 10 records in current page are selected
  currentPageTotalCount: 10, // Current page has 10 records
  totalRecordsCount: 100, // We have 100 records in total
  totalSelectedCount: 100, // All records across all pages are selected
  onSelectAllRecords: async () => {
    console.log("Select all records clicked");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};
AllPagesSelected.parameters = {
  docs: {
    description: {
      story:
        "Shows when all records across all pages are selected, displaying the total count.",
    },
  },
};
