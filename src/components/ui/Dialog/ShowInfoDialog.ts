import { Modal } from "antd";

const { info } = Modal;

export const showInfoDialog = (content: any) => {
  info({
    title: "",
    centered: true,
    content,
  });
};
