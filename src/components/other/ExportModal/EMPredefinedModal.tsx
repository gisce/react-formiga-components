import { useCallback, useEffect, useState, useMemo } from "react";
import { Locale, tForLang } from "@/context";
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

export type EMPredefinedModalProps = {
  locale: Locale;
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
  locale,
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
      console.error(error);
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
        await onRemovePredefinedExport(foundExport);
      }
      setRemoveInProgress(false);
    },
    [predefinedExports, onRemovePredefinedExport],
  );

  const columns: ColumnsType<RowData> = useMemo(
    () => [
      {
        title: tForLang("name", locale),
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
        title: tForLang("fieldsToExport", locale),
        dataIndex: "fields",
      },
      {
        title: tForLang("action", locale),
        key: "action",
        render: (_, { key }) => (
          <Space size="middle">
            <Tooltip title={tForLang("select", locale)}>
              <Button
                type="primary"
                shape="circle"
                disabled={removeInProgress}
                icon={<CheckOutlined />}
                onClick={() => handleSelectPredefinedExport(parseInt(key))}
              />
            </Tooltip>
            <Popconfirm
              title={tForLang("confirmDeletePredefinedExport", locale)}
              okText={tForLang("true", locale)}
              cancelText={tForLang("false", locale)}
              disabled={removeInProgress}
              onConfirm={() => handleRemovePredefinedExport(parseInt(key))}
            >
              <Tooltip title={tForLang("delete", locale)}>
                <Button danger shape="circle" icon={<DeleteFilled />} />
              </Tooltip>
            </Popconfirm>
          </Space>
        ),
      },
    ],
    [
      locale,
      removeInProgress,
      handleSelectPredefinedExport,
      handleRemovePredefinedExport,
    ],
  );

  return (
    <Modal
      title={tForLang("selectPredefinedExport", locale)}
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
                {tForLang("cancel", locale)}
              </Button>
            </Space>
          </Row>
        </>
      )}
    </Modal>
  );
};
