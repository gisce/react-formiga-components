import { Divider, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import {
  ExportModalProps,
  ExportRegistersAmount,
  ExportType,
  PredefinedExport,
  PredefinedExportField,
} from "./ExportModal.types";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { EMExportTypeSelector } from "./EMExportTypeSelector";
import { EMTotalRegSelector } from "./EMTotalRegSelector";
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
    selectedKeys: selectedKeysProps = [],
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
  const [selectedFields, setSelectedFields] = useState<PredefinedExportField[]>(
    selectedKeysProps.map((key) => ({ key }))
  );
  const [predefinedModalVisible, setPredefinedModalVisible] = useState(false);
  const [predefinedNameDialogVisible, setPredefinedNameDialogVisible] =
    useState(false);

  const [currentPredefinedExport, setCurrentPredefinedExport] = useState<
    PredefinedExport | undefined
  >();

  useEffect(() => {
    if (!visible) {
      setSelectedFields(undefined);
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
    if (selectedKeysProps !== undefined && !selectedFields) {
      setSelectedFields(selectedKeysProps.map((key) => ({ key })));
    }
  }, [selectedKeysProps, selectedFields]);

  const onTransferChange = useCallback((fields: PredefinedExportField[]) => {
    setSelectedFields(fields);
  }, []);

  const onConfirm = useCallback(async () => {
    setLoading(true);
    try {
      await onSucceed({
        exportType,
        selectedKeys: selectedFields.map((field) => field.key),
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
  }, [exportType, selectedFields, registersAmount]);

  const loadPredefinedExport = (predefinedExport: PredefinedExport) => {
    setPredefinedModalVisible(false);
    setCurrentPredefinedExport(predefinedExport);
    setSelectedFields(predefinedExport.fields);
  };

  const onSavePredefined = useCallback(async () => {
    setLoading(true);
    const newPredefinedExport = await onSavePredefinedExport({
      ...currentPredefinedExport,
      fields: selectedFields,
    });
    setCurrentPredefinedExport(newPredefinedExport);
    setLoading(false);
  }, [currentPredefinedExport, selectedFields]);

  const onSaveNewPredefined = useCallback(
    async (name: string) => {
      const newPredefinedExport = await onSavePredefinedExport({
        name,
        fields: selectedFields,
      });
      setCurrentPredefinedExport(newPredefinedExport);
    },
    [currentPredefinedExport, selectedFields]
  );

  return (
    <Modal
      title={
        <ExportModalTopBar
          disabled={loading}
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
        targetKeys={
          selectedFields ? selectedFields.map((field) => field.key) : []
        }
        onChange={onTransferChange}
        locale={locale}
        onGetFieldChilds={props.onGetFieldChilds}
        onGetFields={props.onGetFields}
        disabled={loading}
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
        onSavePredefined={onSavePredefined}
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
        onSave={onSaveNewPredefined}
      />
    </Modal>
  );
};
