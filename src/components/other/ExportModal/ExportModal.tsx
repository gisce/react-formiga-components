import { Divider, Modal } from "antd";
import React, { useCallback, useState } from "react";
import { ExportModalProps, ExportType } from "./ExportModal.types";
import { tForLang } from "@/context/LocaleContext";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";
import { EMExportTypeSelector } from "./EMExportTypeSelector";

const { error } = Modal;

export const ExportModal = (props: ExportModalProps) => {
  const { visible, locale, onCancel, onSucceed } = props;
  const { modalWidth } = useWindowDimensions();

  const [loading, setLoading] = useState(false);
  const [exportType, setExportType] = useState<ExportType>("csv");

  const onConfirm = useCallback(async () => {
    setLoading(true);
    try {
      await onSucceed({
        exportType: "csv",
        selectedFields: [],
      });
    } catch (err) {
      error({
        title: "Error",
        centered: true,
        content: <>{JSON.stringify(err, null, 2)}</>,
      });
    }
    setLoading(false);
  }, []);

  return (
    <Modal
      title={tForLang("export", locale)}
      centered
      width={modalWidth}
      visible={visible}
      closable={true && !loading}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <EMExportTypeSelector
        locale={locale}
        value={exportType}
        onChange={setExportType}
      />
      <Divider />
      <ModalBottomBar
        locale={locale}
        onClose={onCancel}
        onConfirm={onConfirm}
        loading={loading}
      />
    </Modal>
  );
};
