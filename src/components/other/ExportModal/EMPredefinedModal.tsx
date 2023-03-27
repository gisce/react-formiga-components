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
  Table,
  Tooltip,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import { DeleteFilled, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { EMSeparator } from "./EMSeparator";

export type EMPredefinedModalProps = {
  locale: Locale;
  visible: boolean;
  onCancel: () => void;
  onSucceed: (options: any) => Promise<void>;
};

interface DataType {
  key: string;
  name: string;
  fields: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Exportació bàsica",
    fields: "CUPS/CUPS,Contacto,Titular/Nombre",
  },
  {
    key: "2",
    name: "Exportació composta",
    fields: "CUPS/CUPS,Contacto,Titular/Nombre",
  },
  {
    key: "2",
    name: "Exportació exemple 2",
    fields: "CUPS/CUPS,Contacto,Titular/Nombre",
  },
];

const getColumnsForLocale = (locale: Locale): ColumnsType<DataType> => {
  return [
    {
      title: tForLang("name", locale),
      dataIndex: "name",
      render: (text) => <a style={{ userSelect: "none" }}>{text}</a>,
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
            <Button type="primary" shape="circle" icon={<CheckOutlined />} />
          </Tooltip>
          <Popconfirm
            title={tForLang("confirmDeletePredefinedExport", locale)}
            okText={tForLang("true", locale)}
            cancelText={tForLang("false", locale)}
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

export const EMPredefinedModal = (props: EMPredefinedModalProps) => {
  const { locale, visible, onCancel, onSucceed } = props;
  const { modalWidth } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      title={tForLang("selectPredefinedExport", locale)}
      centered
      width={modalWidth * 0.8}
      visible={visible}
      closable={true && !loading}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <Table
        pagination={false}
        columns={getColumnsForLocale(locale)}
        dataSource={data}
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
                disabled={loading}
                style={{ marginLeft: 15 }}
              >
                {tForLang("cancel", locale)}
              </Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};
