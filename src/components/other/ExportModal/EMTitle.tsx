import { Tooltip, Typography } from "antd";
import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;

export const EMTitle = ({
  title,
  tooltip,
}: {
  title: string;
  tooltip?: string;
}) => (
  <div className={`flex flex-row items-center justify-start}`}>
    <Text>{title}</Text>
    {tooltip && (
      <Tooltip title={tooltip} className="pl-1">
        <QuestionCircleOutlined className="text-xs text-blue-400" />
      </Tooltip>
    )}
  </div>
);
