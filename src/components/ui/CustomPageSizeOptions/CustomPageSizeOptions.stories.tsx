import type { Meta, StoryObj } from "@storybook/react";
import { CustomPageSizeOptions } from "./CustomPageSizeOptions";
import React, { useState } from "react";

const meta = {
  title: "Components/UI/CustomPageSizeOptions",
  component: CustomPageSizeOptions,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomPageSizeOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example (uncontrolled)
export const Basic: Story = {
  args: {
    pageSize: 10,
    maxPageSize: 100,
    itemsPerPageText: "/ pàg.",
  },
};

// Controlled example with state
const ControlledExample = () => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <CustomPageSizeOptions
      pageSize={pageSize}
      maxPageSize={100}
      onChange={setPageSize}
      itemsPerPageText="/ pàg."
      showAllOption
      allOptionText="All"
    />
  );
};

export const Controlled: Story = {
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "All",
    itemsPerPageText: "/ pàg.",
  },
  render: () => <ControlledExample />,
};

// With All option (default "All" text)
export const WithAllOption: Story = {
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    itemsPerPageText: "/ pàg.",
  },
};

// With custom All option text
export const WithCustomAllText: Story = {
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "Tots",
    itemsPerPageText: "/ pàg.",
  },
};

// Custom locale
export const CustomLocale: Story = {
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "All items",
    itemsPerPageText: "items per page",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

// Custom styled
export const CustomStyled: Story = {
  args: {
    ...Basic.args,
    style: { width: 200, backgroundColor: "#f5f5f5" },
  },
};
