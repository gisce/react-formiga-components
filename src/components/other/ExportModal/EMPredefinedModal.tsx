import { useCallback, useEffect, useState, useMemo } from "react";
import { useLocale } from "@/context";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { CheckOutlined, CloseOutlined, DeleteFilled } from "@ant-design/icons";
import {
  Button,
  Divider,
  Modal,
  Popconfirm,
  Row,
  Space,
  Spin,
  Table,
  Tooltip,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import { EMSeparator } from "./EMSeparator";
import {
  PredefinedExport,
  PredefinedExportMandatoryId,
} from "./ExportModal.types";
import { raiseError } from "./ExportModal";

export type EMPredefinedModalProps = {
  visible: boolean;
  onCancel: () => void;
  onSelectPredefinedExport: (predefinedExport: PredefinedExport) => void;
  onGetPredefinedExports: () => Promise<PredefinedExportMandatoryId[]>;
  onRemovePredefinedExport: (
    predefinedExport: PredefinedExport,
  ) => Promise<void>;
};

interface RowData {
  key: string;
  name: string;
  fields: string;
}

export const EMPredefinedModal = ({
  visible,
  onCancel,
  onSelectPredefinedExport,
  onGetPredefinedExports,
  onRemovePredefinedExport,
}: EMPredefinedModalProps) => {
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<RowData[]>([]);
  const [predefinedExports, setPredefinedExports] = useState<
    PredefinedExport[]
  >([]);
  const [removeInProgress, setRemoveInProgress] = useState(false);
  const { t } = useLocale();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await onGetPredefinedExports();
      setPredefinedExports(data);
      setRows(
        data.map((item) => ({
          key: item.id.toString(),
          name: item.name,
          fields: item.fields.map((field) => field.title).join(", "),
        })),
      );
    } catch (error) {
      raiseError(error);
    } finally {
      setLoading(false);
    }
  }, [onGetPredefinedExports]);

  useEffect(() => {
    if (visible) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleSelectPredefinedExport = useCallback(
    (id: number) => {
      const foundExport = predefinedExports.find((item) => item.id === id);
      if (foundExport) onSelectPredefinedExport(foundExport);
    },
    [predefinedExports, onSelectPredefinedExport],
  );

  const handleRemovePredefinedExport = useCallback(
    async (id: number) => {
      setRemoveInProgress(true);
      const foundExport = predefinedExports.find((item) => item.id === id);
      if (foundExport) {
        try {
          await onRemovePredefinedExport(foundExport);
        } catch (error) {
          raiseError(error);
        }
      }
      setRemoveInProgress(false);
    },
    [predefinedExports, onRemovePredefinedExport],
  );

  const columns: ColumnsType<RowData> = useMemo(
    () => [
      {
        title: t("name"),
        dataIndex: "name",
        render: (text, { key }) => (
          <a
            onClick={() => handleSelectPredefinedExport(parseInt(key))}
            style={{ userSelect: "none" }}
          >
            {text}
          </a>
        ),
      },
      {
        title: t("fieldsToExport"),
        dataIndex: "fields",
      },
      {
        title: t("action"),
        key: "action",
        render: (_, { key }) => (
          <Space size="middle">
            <Tooltip title={t("select")}>
              <Button
                type="primary"
                shape="circle"
                disabled={removeInProgress}
                icon={<CheckOutlined />}
                onClick={() => handleSelectPredefinedExport(parseInt(key))}
              />
            </Tooltip>
            <Popconfirm
              title={t("confirmDeletePredefinedExport")}
              okText={t("true")}
              cancelText={t("false")}
              disabled={removeInProgress}
              onConfirm={() => handleRemovePredefinedExport(parseInt(key))}
            >
              <Tooltip title={t("delete")}>
                <Button danger shape="circle" icon={<DeleteFilled />} />
              </Tooltip>
            </Popconfirm>
          </Space>
        ),
      },
    ],
    [
      t,
      handleSelectPredefinedExport,
      removeInProgress,
      handleRemovePredefinedExport,
    ],
  );

  return (
    <Modal
      title={t("selectPredefinedExport")}
      centered
      width={modalWidth * 0.8}
      open={visible}
      closable={!loading && !removeInProgress}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      {loading ? (
        <Spin />
      ) : (
        <>
          <Table
            pagination={false}
            columns={columns}
            dataSource={rows}
            bordered
          />
          <EMSeparator />
          <Divider />
          <Row justify="end">
            <Space>
              <Button
                icon={<CloseOutlined />}
                onClick={onCancel}
                disabled={loading || removeInProgress}
                style={{ marginLeft: 15 }}
              >
                {t("cancel")}
              </Button>
            </Space>
          </Row>
        </>
      )}
    </Modal>
  );
};
