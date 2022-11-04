import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExportModal } from "./ExportModal";
import { Button } from "antd";
import { ExportOptions } from "./ExportModal.types";

export default {
  title: "Components/Other/ExportModal",
  component: ExportModal,
} as ComponentMeta<typeof ExportModal>;

export const Default: ComponentStory<typeof ExportModal> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open modal
      </Button>
      <ExportModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onSucceed={async (options: ExportOptions) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // throw new Error("Example error");
          setVisible(false);
          return;
        }}
        locale="en_US"
        totalRegisters={92348}
        selectedRegistersToExport={32}
        onGetFieldChilds={async (field: string) => {
          return [];
        }}
        onGetFields={async () => {
          return [];
        }}
      />
    </>
  );
};
