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

export const raiseError = (err: Error) => {
  console.error(err);
  error({
    title: "Error",
    centered: true,
    content: (
      <>
        {err instanceof Error
          ? JSON.stringify(err, ["message", "stack", "name"], 2)
          : JSON.stringify(err)}
      </>
    ),
  });
};

export const ExportModalWithContext = (props: ExportModalProps) => {
  const {
    visible,
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
      raiseError(err);
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
      try {
        const newPredefinedExport = await onSavePredefinedExport({
          name,
          fields: selectedFields,
        });
        setCurrentPredefinedExport(newPredefinedExport);
      } catch (err) {
        raiseError(err);
      }
    },
    [onSavePredefinedExport, selectedFields],
  );

  const onGetPredefinedExportsCallback = useCallback(async () => {
    const { predefinedExports, keysWithChilds } =
      await onGetPredefinedExports();
    if (keysWithChilds.length > 0) {
      let updatedTree;

      for (const entry of keysWithChilds) {
        const { key, childs } = entry;
        if (!updatedTree) {
          updatedTree = updateTreeData(dataSource!, key, childs);
        } else {
          updatedTree = updateTreeData(updatedTree, key, childs);
        }
      }
      setDataSource(updatedTree as ExportField[]);
    }

    return predefinedExports as PredefinedExportMandatoryId[];
  }, [dataSource, onGetPredefinedExports, setDataSource]);

  return (
    <Modal
      title={
        <ExportModalTopBar
          disabled={loading}
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
        onGetFieldChilds={props.onGetFieldChilds}
        onGetFields={props.onGetFields}
        disabled={loading}
      />
      <EMSeparator />
      <EMExportTypeSelector value={exportType} onChange={setExportType} />
      <EMSeparator />
      <EMTotalRegSelector
        totalRegisters={totalRegisters}
        selectedRegistersToExport={selectedRegistersToExport}
        visibleRegisters={visibleRegisters}
        value={registersAmount}
        onChange={setRegistersAmount}
      />
      <Divider />
      <EMBottomBar
        onClose={onCancel}
        onConfirm={onConfirm}
        loading={loading}
        onSavePredefined={() => {
          setPredefinedNameDialogVisible(true);
        }}
      />
      <EMPredefinedModal
        visible={predefinedModalVisible}
        onCancel={() => {
          setPredefinedModalVisible(false);
        }}
        onSelectPredefinedExport={loadPredefinedExport}
        onGetPredefinedExports={onGetPredefinedExportsCallback}
        onRemovePredefinedExport={onRemovePredefinedExport}
      />
      <EMNameDialog
        visible={predefinedNameDialogVisible}
        onCancel={() => {
          setPredefinedNameDialogVisible(false);
        }}
        onSave={onSaveNewPredefined}
      />
    </Modal>
  );
};
