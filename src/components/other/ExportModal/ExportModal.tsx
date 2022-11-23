import { Divider, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
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
import { EMTransfer } from "./EMTransfer";
import { EMSeparator } from "./EMSeparator";

const { error } = Modal;

export const ExportModal = (props: ExportModalProps) => {
  const {
    visible,
    locale,
    onCancel,
    onSucceed,
    totalRegisters,
    selectedRegistersToExport,
    selectedKeys: selectedKeysProps,
    visibleRegisters,
  } = props;
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [exportType, setExportType] = useState<ExportType>("xlsx");
  const [registersAmount, setRegistersAmount] =
    useState<ExportRegistersAmount>("all");
  const [selectedKeys, setSelectedKeys] = useState<string[]>(selectedKeysProps);

  useEffect(() => {
    if (!visible) {
      setSelectedKeys(undefined);
      setExportType("xlsx");
      setRegistersAmount(selectedRegistersToExport ? "selected" : "all");
    }
  }, [visible]);

  useEffect(() => {
    const newAmountValue = selectedRegistersToExport ? "selected" : "all";
    setRegistersAmount(newAmountValue);
  }, [selectedRegistersToExport]);

  useEffect(() => {
    if (selectedKeysProps !== undefined && !selectedKeys) {
      setSelectedKeys(selectedKeysProps);
    }
  }, [selectedKeysProps, selectedKeys]);

  const onTransferChange = useCallback((keys: string[]) => {
    setSelectedKeys(keys);
  }, []);

  const onConfirm = useCallback(async () => {
    setLoading(true);
    try {
      await onSucceed({
        exportType,
        selectedKeys,
        registersAmount,
      });
    } catch (err) {
      console.error(err);
      error({
        title: "Error",
        centered: true,
        content: <>{JSON.stringify(err, null, 2)}</>,
      });
    }
    setLoading(false);
  }, [exportType, selectedKeys, registersAmount]);

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
      <EMTransfer
        targetKeys={selectedKeys || []}
        onChange={onTransferChange}
        locale={locale}
        onGetFieldChilds={props.onGetFieldChilds}
        onGetFields={props.onGetFields}
      />
      <EMSeparator />
      <EMExportTypeSelector
        locale={locale}
        value={exportType}
        onChange={setExportType}
      />
      <EMSeparator />
      <EMTotalRegSelector
        locale={locale}
        totalRegisters={totalRegisters}
        selectedRegistersToExport={selectedRegistersToExport}
        visibleRegisters={visibleRegisters}
        value={registersAmount}
        onChange={setRegistersAmount}
      />
      <Divider />
      <ModalBottomBar
        locale={locale}
        onClose={onCancel}
        onConfirm={onConfirm}
        loading={loading}
        left={tForLang("exportRegisters", locale).replace(
          "{total}",
          registersAmount === "selected" && selectedRegistersToExport
            ? selectedRegistersToExport?.toString()
            : registersAmount === "selected"
            ? visibleRegisters
            : totalRegisters.toString()
        )}
      />
    </Modal>
  );
};
