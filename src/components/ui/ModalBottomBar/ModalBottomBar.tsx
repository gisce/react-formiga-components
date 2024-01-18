import { Button, Col, Row, Space } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useLocale } from "@/context/LocaleContext";
import { ModalBottomBarProps } from "./ModalBottomBar.types";

export const ModalBottomBar = (props: ModalBottomBarProps) => {
  const {
    onClose,
    onConfirm,
    loading,
    left = null,
    rightAdditionalButtons = null,
    okText,
  } = props;

  const { t } = useLocale();

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
              style={{ marginLeft: 15 }}
              icon={<CloseOutlined />}
              onClick={onClose}
              disabled={loading}
            >
              {t("cancel")}
            </Button>
            <Button
              icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
              disabled={loading}
              onClick={onConfirm}
              style={{ marginLeft: 15 }}
              type="primary"
            >
              {okText || t("ok")}
            </Button>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};
