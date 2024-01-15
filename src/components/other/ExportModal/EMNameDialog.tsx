import { Locale, tForLang } from "@/context";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Input, Modal, Row, Space } from "antd";
import { memo, useCallback, useEffect, useState } from "react";

export type EMNameDialogProps = {
  locale: Locale;
  visible: boolean;
  onCancel: () => void;
  onSave: (name: string) => Promise<void>;
};

const MODAL_WIDTH_FACTOR = 0.8;

export const EMNameDialog = memo((props: EMNameDialogProps) => {
  const { locale, visible, onCancel, onSave } = props;
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

  return (
    <Modal
      title={tForLang("enterNameOfExport", locale)}
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
        placeholder={tForLang("nameOfExport", locale)}
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
                {tForLang("cancel", locale)}
              </Button>
              <Button
                icon={loading ? <LoadingOutlined /> : <CheckOutlined />}
                disabled={loading}
                onClick={onSaveCallback}
                style={{ marginLeft: 15 }}
                type="primary"
              >
                {tForLang("ok", locale)}
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
});

EMNameDialog.displayName = "EMNameDialog";
