import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  confirmMessage,
  t,
}: {
  onOk: () => void;
  confirmMessage: ReactNode;
  t: (key: string) => string;
}) => {
  confirm({
    title: t("confirmation"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: confirmMessage,
    okText: t("ok"),
    cancelText: t("cancel"),
    onOk,
  });
};

export default showDialog;
