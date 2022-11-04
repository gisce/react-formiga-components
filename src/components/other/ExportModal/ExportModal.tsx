import { Divider, Modal, Space } from "antd";
import React, { useCallback, useState } from "react";
import {
  ExportModalProps,
  ExportRegistersAmount,
  ExportType,
} from "./ExportModal.types";
import { tForLang } from "@/context/LocaleContext";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";
import { EMExportTypeSelector } from "./EMExportTypeSelector";
import { EMTotalRegSelector } from "./EMTotalRegSelector";

const { error } = Modal;

export const ExportModal = (props: ExportModalProps) => {
  const {
    visible,
    locale,
    onCancel,
    onSucceed,
    totalRegisters,
    selectedRegistersToExport,
  } = props;
  const { modalWidth } = useWindowDimensions();

  const [loading, setLoading] = useState(false);
  const [exportType, setExportType] = useState<ExportType>("csv");
  const [registersAmount, setRegistersAmount] = useState<ExportRegistersAmount>(
    selectedRegistersToExport ? "selected" : "all"
  );

  const onConfirm = useCallback(async () => {
    setLoading(true);
    try {
      await onSucceed({
        exportType: "csv",
        selectedFields: [],
        registersAmount: "all",
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
      <div style={{ padding: "0.5em" }} />
      {selectedRegistersToExport && (
        <EMTotalRegSelector
          locale={locale}
          totalRegisters={totalRegisters}
          selectedRegistersToExport={selectedRegistersToExport}
          value={registersAmount}
          onChange={setRegistersAmount}
        />
      )}
      <Divider />
      <ModalBottomBar
        locale={locale}
        onClose={onCancel}
        onConfirm={onConfirm}
        loading={loading}
        left={tForLang("exportRegisters", locale).replace(
          "{total}",
          registersAmount === "selected"
            ? selectedRegistersToExport.toString()
            : totalRegisters.toString()
        )}
      />
    </Modal>
  );
};
