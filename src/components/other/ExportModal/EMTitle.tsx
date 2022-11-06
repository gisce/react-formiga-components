import { Tooltip, Typography } from "antd";
import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ExportField } from "./ExportModal.types";
const { Text } = Typography;

export const EMTitle = ({ node }: { node: ExportField }) => {
  const { required = false, tooltip, title } = node;

  const divClasses = ["flex", "flex-row", "items-center", "justify-start"];

  if (required) {
    divClasses.push("bg-blue-100");
  }

  return (
    <div className={divClasses.join(" ")}>
      <Text>{title}</Text>
      {tooltip && (
        <Tooltip title={tooltip} className="pl-1">
          <QuestionCircleOutlined className="text-xs text-blue-400" />
        </Tooltip>
      )}
    </div>
  );
};
