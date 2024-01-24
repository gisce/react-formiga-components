import { Locale, tForLang, useLocale } from "@/context";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Input, Modal, Row, Space } from "antd";
import { memo, useCallback, useEffect, useState } from "react";

export type EMNameDialogProps = {
  visible: boolean;
  onCancel: () => void;
  onSave: (name: string) => Promise<void>;
};

const MODAL_WIDTH_FACTOR = 0.8;

export const EMNameDialog = memo((props: EMNameDialogProps) => {
  const { visible, onCancel, onSave } = props;
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>();

  const onSaveCallback = useCallback(async () => {
    if (!name) return;
    setLoading(true);
    await onSave(name);
    setLoading(false);
    onCancel();
  }, [name, onSave, onCancel]);

  useEffect(() => {
    if (!visible) {
      setLoading(false);
    }
  }, [visible]);
  const { t } = useLocale();

  return (
    <Modal
      title={t("enterNameOfExport")}
      centered
      width={modalWidth * MODAL_WIDTH_FACTOR}
      open={visible}
      closable={!loading}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <Input
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder={t("nameOfExport")}
      ></Input>
      <Divider />
      <Row>
        <Col span={24}>
          <Row justify="end">
            <Space>
              <Button
                icon={<CloseOutlined />}
                onClick={onCancel}
                disabled={loading}
                style={{ marginLeft: 15 }}
              >
                {t("cancel")}
              </Button>
              <Button
                icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
                disabled={loading}
                onClick={onSaveCallback}
                style={{ marginLeft: 15 }}
                type="primary"
              >
                {t("ok")}
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
});

EMNameDialog.displayName = "EMNameDialog";
