import { Locale, tForLang } from "@/context";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  Button,
  Col,
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
import React, { useEffect, useRef, useState } from "react";
import { DeleteFilled, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { EMSeparator } from "./EMSeparator";
import { PredefinedExport } from "./ExportModal.types";

export type EMPredefinedModalProps = {
  locale: Locale;
  visible: boolean;
  onCancel: () => void;
  onSelectPredefinedExport: (predefinedExport: PredefinedExport) => void;
  onGetPredefinedExports: () => Promise<PredefinedExport[]>;
  onRemovePredefinedExport: (
    predefinedExport: PredefinedExport
  ) => Promise<void>;
};

interface RowData {
  key: string;
  name: string;
  fields: string;
}

export const EMPredefinedModal = (props: EMPredefinedModalProps) => {
  const {
    locale,
    visible,
    onCancel,
    onSelectPredefinedExport,
    onGetPredefinedExports,
    onRemovePredefinedExport,
  } = props;
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<RowData[]>([]);
  const [predefinedExports, setPredefinedExports] = useState<
    PredefinedExport[]
  >([]);
  const [removeInProgress, setRemoveInProgress] = useState(false);
  const previousRemoveInProgressRef = useRef(false);

  useEffect(() => {
    if (visible) {
      fetchData();
    }
  }, [visible]);

  useEffect(() => {
    if (previousRemoveInProgressRef.current && !removeInProgress) {
      fetchData();
    }

    previousRemoveInProgressRef.current = removeInProgress;
  }, [removeInProgress]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await onGetPredefinedExports();
      setPredefinedExports(data);
      const rows = data.map((item) => {
        return {
          key: item.id.toString(),
          name: item.name,
          fields: item.fields.map((field) => field.title).join(", "),
        };
      });
      setRows(rows);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Modal
      title={tForLang("selectPredefinedExport", locale)}
      centered
      width={modalWidth * 0.8}
      visible={visible}
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
            columns={getColumns({
              locale,
              predefinedExports,
              onSelectPredefinedExport,
              onRemovePredefinedExport,
              removeInProgress,
              setRemoveInProgress,
            })}
            dataSource={rows}
            bordered
          ></Table>
          <EMSeparator />
          <Divider />
          <Row>
            <Col span={24}>
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
            </Col>
          </Row>
        </>
      )}
    </Modal>
  );
};

const getColumns = ({
  locale,
  onSelectPredefinedExport,
  onRemovePredefinedExport,
  predefinedExports,
  removeInProgress,
  setRemoveInProgress,
}: {
  locale: Locale;
  predefinedExports: PredefinedExport[];
  onSelectPredefinedExport: (predefinedExport: PredefinedExport) => void;
  onRemovePredefinedExport: (
    predefinedExport: PredefinedExport
  ) => Promise<void>;
  removeInProgress: boolean;
  setRemoveInProgress: (value: boolean) => void;
}): ColumnsType<RowData> => {
  return [
    {
      title: tForLang("name", locale),
      dataIndex: "name",
      render: (text, record) => (
        <a
          style={{ userSelect: "none" }}
          onClick={() => {
            onSelectPredefinedExport(
              predefinedExports.find((item) => item.id === parseInt(record.key))
            );
          }}
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
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title={tForLang("select", locale)}>
            <Button
              type="primary"
              shape="circle"
              disabled={removeInProgress}
              icon={<CheckOutlined />}
              onClick={() => {
                onSelectPredefinedExport(
                  predefinedExports.find(
                    (item) => item.id === parseInt(record.key)
                  )
                );
              }}
            />
          </Tooltip>
          <Popconfirm
            title={tForLang("confirmDeletePredefinedExport", locale)}
            okText={tForLang("true", locale)}
            cancelText={tForLang("false", locale)}
            disabled={removeInProgress}
            onConfirm={async () => {
              setRemoveInProgress(true);
              await onRemovePredefinedExport(
                predefinedExports.find(
                  (item) => item.id === parseInt(record.key)
                )
              );
              setRemoveInProgress(false);
            }}
          >
            <Tooltip title={tForLang("delete", locale)}>
              <Button danger shape="circle" icon={<DeleteFilled />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];
};
