import { useCallback, useEffect, useState, useMemo, Fragment } from "react";
import { useLocale } from "@/context";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteFilled,
  WarningFilled,
} from "@ant-design/icons";
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
  PredefinedExportField,
  PredefinedExportMandatoryId,
} from "./ExportModal.types";
import { raiseError } from "./ExportModal";
import showDialog from "@/components/ui/Dialog/ConfirmDialog";

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
  fields: PredefinedExportField[];
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
          fields: item.fields,
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

      if (foundExport) {
        const fieldsWithoutTitle = foundExport.fields.filter(
          (field) => !field.title,
        );

        if (fieldsWithoutTitle.length > 0) {
          showDialog({
            onOk: () => {
              // we should also filter all the fields of foundExport childs that don't have title
              onSelectPredefinedExport({
                ...foundExport,
                fields: foundExport.fields.filter((field) => field.title),
              });
            },
            confirmMessage: (
              <>
                {t("exportHasFieldsUnavailable")}
                <strong
                  style={{
                    display: "block",
                    paddingTop: 15,
                    paddingBottom: 15,
                    fontFamily: "'Courier New', Courier, monospace",
                  }}
                >
                  {fieldsWithoutTitle.map((field) => field.key).join(", ")}
                </strong>
                {t("continueAndIgnoreFieldsUnavailable")}
              </>
            ),
            t,
          });
          return;
        }

        onSelectPredefinedExport(foundExport);
      }
    },
    [predefinedExports, t, onSelectPredefinedExport],
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

  const checkIfPredefinedExportCanBeExported = useCallback(
    (id: number) => {
      const pExport = predefinedExports.find((item) => item.id === id);
      // Check if all fields have title
      return pExport?.fields.every((field) => field.title);
    },
    [predefinedExports],
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
        render: (fields: PredefinedExportField[]) => {
          return (
            <>
              {fields.map((field, index) => {
                // Determine whether to add a comma after this element
                const addComma = index < fields.length - 1; // true for all but the last element
                return (
                  <Fragment key={field.key}>
                    {field.title ? (
                      <span>{field.title}</span>
                    ) : (
                      <Tooltip title={t("noExportFieldFound")}>
                        <span style={{ color: "grey" }}>{field.key}</span>
                        <WarningFilled
                          style={{ color: "#FE8D59", paddingLeft: 5 }}
                        />
                      </Tooltip>
                    )}
                    {/* Add comma and space if this is not the last element */}
                    {addComma && ", "}
                  </Fragment>
                );
              })}
            </>
          );
        },
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
                disabled={
                  removeInProgress ||
                  !checkIfPredefinedExportCanBeExported(parseInt(key))
                }
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
      checkIfPredefinedExportCanBeExported,
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
      styles={{
        body: {
          paddingTop: 15,
        },
      }}
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
