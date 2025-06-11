import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Components/UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "terp-purchase",
    style: { fontSize: 24 },
  },
};

export const StockIcon: Story = {
  args: {
    icon: "STOCK_SAVE",
    style: { fontSize: 24 },
  },
};

export const GtkIcon: Story = {
  args: {
    icon: "gtk-save",
    style: { fontSize: 24 },
  },
};

export const CustomStyle: Story = {
  args: {
    icon: "terp-graph",
    style: { fontSize: 32, color: "blue" },
  },
};
