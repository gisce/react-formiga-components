import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Divider, Modal } from "antd";
import { useCallback, useEffect, useState } from "react";
import { EMBottomBar } from "./EMBottomBar";
import { EMExportTypeSelector } from "./EMExportTypeSelector";
import { EMNameDialog } from "./EMNameDialog";
import { EMPredefinedModal } from "./EMPredefinedModal";
import { EMSeparator } from "./EMSeparator";
import { EMTotalRegSelector } from "./EMTotalRegSelector";
import { EMTransfer } from "./EMTransfer";
import {
  ExportField,
  ExportModalProps,
  ExportRegistersAmount,
  ExportType,
  PredefinedExport,
  PredefinedExportField,
  PredefinedExportMandatoryId,
} from "./ExportModal.types";
import {
  ExportModalContextProvider,
  useExportModalContext,
} from "./ExportModalContext";
import { ExportModalTopBar } from "./ExportModalTopBar";
import { updateTreeData } from "./exportModalHelper";

const { error } = Modal;

export const ExportModal = (props: ExportModalProps) => {
  return (
    <ExportModalContextProvider>
      <ExportModalWithContext {...props} />
    </ExportModalContextProvider>
  );
};

export const ExportModalWithContext = (props: ExportModalProps) => {
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
    selectedKeysProps.map((key) => ({ key })),
  );
  const [predefinedModalVisible, setPredefinedModalVisible] = useState(false);
  const [predefinedNameDialogVisible, setPredefinedNameDialogVisible] =
    useState(false);
  const { dataSource, setDataSource } = useExportModalContext();

  const [currentPredefinedExport, setCurrentPredefinedExport] = useState<
    PredefinedExport | undefined
  >();

  useEffect(() => {
    if (!visible) {
      setSelectedFields([]);
      setCurrentPredefinedExport(undefined);
      setExportType("xlsx");
      setRegistersAmount(selectedRegistersToExport ? "selected" : "all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [onSucceed, exportType, selectedFields, registersAmount]);

  const loadPredefinedExport = useCallback(
    (predefinedExport: PredefinedExport) => {
      setPredefinedModalVisible(false);
      setCurrentPredefinedExport(predefinedExport);
      setSelectedFields(predefinedExport.fields);
    },
    [],
  );

  const onSaveNewPredefined = useCallback(
    async (name: string) => {
      const newPredefinedExport = await onSavePredefinedExport({
        name,
        fields: selectedFields,
      });
      setCurrentPredefinedExport(newPredefinedExport);
    },
    [onSavePredefinedExport, selectedFields],
  );

  const onGetPredefinedExportsCallback = useCallback(async () => {
    const { predefinedExports, keysWithChilds } =
      await onGetPredefinedExports();

    if (keysWithChilds.length > 0) {
      let updatedTree: ExportField[] = [];

      for (const entry of keysWithChilds) {
        const { key, childs } = entry;
        if (!updatedTree) {
          updatedTree = updateTreeData(dataSource!, key, childs);
        } else {
          updatedTree = updateTreeData(updatedTree, key, childs);
        }
      }
      setDataSource(updatedTree);
    }

    return predefinedExports as PredefinedExportMandatoryId[];
  }, [dataSource, onGetPredefinedExports, setDataSource]);

  return (
    <Modal
      title={
        <ExportModalTopBar
          disabled={loading}
          locale={locale}
          title={currentPredefinedExport?.name}
          onClickLoadPredefined={() => setPredefinedModalVisible(true)}
        />
      }
      centered
      width={modalWidth}
      open={visible}
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
        onSavePredefined={() => {
          setPredefinedNameDialogVisible(true);
        }}
      />
      <EMPredefinedModal
        locale={locale}
        visible={predefinedModalVisible}
        onCancel={() => {
          setPredefinedModalVisible(false);
        }}
        onSelectPredefinedExport={loadPredefinedExport}
        onGetPredefinedExports={onGetPredefinedExportsCallback}
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
