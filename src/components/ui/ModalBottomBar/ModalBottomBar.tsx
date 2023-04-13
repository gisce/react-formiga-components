import React from "react";
import { Button, Col, Row, Space } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
  SaveOutlined,
  PlusCircleOutlined,
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
    onSavePredefined,
    onSaveNewPredefined,
    showSaveCurrentExport = false,
  } = props;

  return (
    <Row>
      <Col span={12}>
        <Space>{left}</Space>
      </Col>
      <Col span={12}>
        <Row justify="end">
          <Space>
            <Button
              icon={<PlusCircleOutlined />}
              onClick={onSaveNewPredefined}
              disabled={loading}
            >
              {tForLang("saveNewPredefinedExport", locale)}
            </Button>
            {showSaveCurrentExport && (
              <Button
                icon={<SaveOutlined />}
                onClick={onSavePredefined}
                disabled={loading}
              >
                {tForLang("savePredefinedExport", locale)}
              </Button>
            )}
            <Button
              icon={<CloseOutlined />}
              onClick={onClose}
              disabled={loading}
              style={{ marginLeft: 15 }}
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
              {tForLang("ok", locale)}
            </Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};
