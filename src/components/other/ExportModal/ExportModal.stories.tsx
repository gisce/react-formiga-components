import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExportModal } from "./ExportModal";

export default {
  title: "Components/Other/ExportModal",
  component: ExportModal,
} as ComponentMeta<typeof ExportModal>;

const Template: ComponentStory<typeof ExportModal> = () => <ExportModal />;

export const Basic = Template.bind({});
