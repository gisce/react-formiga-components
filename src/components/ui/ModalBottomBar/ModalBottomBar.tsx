import React from "react";
import { Button, Col, Row, Space } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { ModalBottomBarProps } from "./ModalBottomBar.types";

export const ModalBottomBar = (props: ModalBottomBarProps) => {
  const {
    locale,
    onClose,
    onConfirm,
    loading,
    left = null,
    rightAdditionalButtons = null,
    okText = tForLang("ok", locale),
  } = props;

  return (
    <Row>
      <Col span={12}>
        <Space>{left}</Space>
      </Col>
      <Col span={12}>
        <Row justify="end">
          <Space>
            {rightAdditionalButtons}
            <Button
              icon={<CloseOutlined />}
              onClick={onClose}
              disabled={loading}
            >
              {tForLang("cancel", locale)}
            </Button>
            <Button
              icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
              disabled={loading}
              onClick={onConfirm}
              style={{ marginLeft: 15 }}
              type="primary"
            >
              {okText}
            </Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};
