// @TODO: Review this component
/* eslint-disable */
import { useRef } from "react";
import { Row, Space } from "antd";
import { BaseFieldProps, Button, useLocale } from "@/index";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import { downloadFile, toBase64 } from "@/helpers/fileHelper";

export const ImageInput = (props: BaseFieldProps<string>) => {
  const { readOnly, value, onChange, locale } = props;
  const { t } = useLocale(locale);
  const inputFile = useRef(null);

  const triggerChange = (changedValue?: string) => {
    onChange?.(changedValue);
  };

  async function onChangeFile(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const b64: string = await toBase64(file);
    triggerChange(b64);
  }

  function clearFile() {
    triggerChange(undefined);
  }

  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        accept="image/*"
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <Space direction="vertical">
        {value && (
          <Row gutter={8} wrap={false} justify="center">
            <img
              src={`data:image/*;base64,${value}`}
              style={{ maxWidth: "100px" }}
            />
          </Row>
        )}
        <Row gutter={8} wrap={false} justify="center" style={{ marginLeft: 0 }}>
          <Space>
            <Button
              tooltip={t("uploadNewImage")}
              icon={<FolderOpenOutlined />}
              disabled={readOnly}
              onClick={() => {
                const fileUploadField = inputFile.current as any;
                fileUploadField.click();
              }}
            />
            {value && (
              <>
                <Button
                  tooltip={t("download")}
                  onClick={() => {
                    downloadFile(value!);
                  }}
                  icon={<DownloadOutlined />}
                />
                <Button
                  tooltip={t("clear")}
                  disabled={readOnly}
                  onClick={clearFile}
                  icon={<ClearOutlined />}
                />
              </>
            )}
          </Space>
        </Row>
      </Space>
    </>
  );
};
