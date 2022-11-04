import React from "react";
import { Button, Row, Space } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { ModalBottomBarProps } from "./ModalBottomBar.types";

export const ModalBottomBar = (props: ModalBottomBarProps) => {
  const { locale, onClose, onConfirm, loading } = props;

  return (
    <Row justify="end">
      <Space>
        <Button icon={<CloseOutlined />} onClick={onClose} disabled={loading}>
          {tForLang("cancel", locale)}
        </Button>
        <Button
          icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
          disabled={loading}
          onClick={onConfirm}
          style={{ marginLeft: 15 }}
          type="primary"
        >
          {tForLang("ok", locale)}
        </Button>
      </Space>
    </Row>
  );
};
