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
          console.log(options);
          return;
        }}
        locale="en_US"
        selectedKeys={["cups"]}
        totalRegisters={92348}
        visibleRegisters={8}
        selectedRegistersToExport={32}
        onGetFieldChilds={async ({ key, parentKey, parentTitle }: any) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (key === "cups") {
            return [
              {
                key: "contador",
                title: "CUPS/Contador",
                tooltip: "Help",
                isLeaf: true,
              },
              {
                key: "code",
                title: "CUPS/Código",
                isLeaf: true,
                required: true,
              },
            ];
          }
          return [];
        }}
        onGetFields={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return [
            { key: "contract", title: "Contrato", isLeaf: true },
            {
              key: "cups",
              title: "CUPS",
            },
            { key: "address", title: "Dirección", isLeaf: true },
          ];
        }}
      />
    </>
  );
};
