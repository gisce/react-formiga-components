import { Divider, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import {
  ExportModalProps,
  ExportRegistersAmount,
  ExportType,
  PredefinedExport,
} from "./ExportModal.types";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { EMExportTypeSelector } from "./EMExportTypeSelector/EMExportTypeSelector";
import { EMTotalRegSelector } from "./EMTotalRegSelector/EMTotalRegSelector";
import { EMTransfer } from "./EMTransfer";
import { EMSeparator } from "./EMSeparator";
import { ExportModalTopBar } from "./ExportModalTopBar";
import { EMPredefinedModal } from "./EMPredefinedModal";
import { EMNameDialog } from "./EMNameDialog";
import { EMBottomBar } from "./EMBottomBar";

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
    onGetPredefinedExports,
    onSavePredefinedExport,
    onRemovePredefinedExport,
  } = props;
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [exportType, setExportType] = useState<ExportType>("xlsx");
  const [registersAmount, setRegistersAmount] =
    useState<ExportRegistersAmount>("all");
  const [selectedKeys, setSelectedKeys] = useState<string[]>(selectedKeysProps);
  const [predefinedModalVisible, setPredefinedModalVisible] = useState(false);
  const [predefinedNameDialogVisible, setPredefinedNameDialogVisible] =
    useState(false);

  const [currentPredefinedExport, setCurrentPredefinedExport] = useState<
    PredefinedExport | undefined
  >();

  useEffect(() => {
    if (!visible) {
      setSelectedKeys(undefined);
      setCurrentPredefinedExport(undefined);
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

  const loadPredefinedExport = (predefinedExport: PredefinedExport) => {
    setPredefinedModalVisible(false);
    setCurrentPredefinedExport(predefinedExport);
    setSelectedKeys(predefinedExport.fields.map((field) => field.key));
  };

  return (
    <Modal
      title={
        <ExportModalTopBar
          locale={locale}
          title={currentPredefinedExport?.name}
          onClickLoadPredefined={() => setPredefinedModalVisible(true)}
          onClickClearExport={() => setCurrentPredefinedExport(undefined)}
          mustShowClearButton={!!currentPredefinedExport}
        />
      }
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
      <EMBottomBar
        locale={locale}
        onClose={onCancel}
        onConfirm={onConfirm}
        loading={loading}
        onSavePredefined={() => {
          onSavePredefinedExport(currentPredefinedExport);
        }}
        onSaveNewPredefined={() => {
          setPredefinedNameDialogVisible(true);
        }}
        showSaveCurrentExport={!!currentPredefinedExport}
      />
      <EMPredefinedModal
        locale={locale}
        visible={predefinedModalVisible}
        onCancel={() => {
          setPredefinedModalVisible(false);
        }}
        onSelectPredefinedExport={loadPredefinedExport}
        onGetPredefinedExports={onGetPredefinedExports}
        onRemovePredefinedExport={onRemovePredefinedExport}
      />
      <EMNameDialog
        locale={locale}
        visible={predefinedNameDialogVisible}
        onCancel={() => {
          setPredefinedNameDialogVisible(false);
        }}
        onSucceed={(options: any) => {
          setPredefinedNameDialogVisible(false);
          return Promise.resolve();
        }}
      />
    </Modal>
  );
};
