// @TODO: Review this component
/* eslint-disable */
import { useRef } from "react";
import { Row, Col, Input, Space } from "antd";
import { Button, useLocale } from "@/index";

import {
  getFilesize,
  getMimeType,
  openBase64InNewTab,
  toBase64,
  downloadFile,
} from "@/helpers/fileHelper";

import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { FileInputProps } from "./FileInput.types";
import { RequiredCharInput } from "./FileInput.styles";

export const FileInput = (props: FileInputProps) => {
  const {
    readOnly,
    required,
    filename,
    onFilenameChange,
    value,
    onChange,
    locale,
  } = props;

  const InputComponent = required && !readOnly ? RequiredCharInput : Input;

  const { t } = useLocale(locale);

  const inputFile = useRef(null);

  const filesize = value ? getFilesize(value) : "";

  const triggerChange = (changedValue?: string) => {
    onChange?.(changedValue);
  };

  async function openFile() {
    const fileType: any = await getMimeType(value!);
    openBase64InNewTab(value!, fileType.mime);
  }

  async function onChangeFile(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const b64: string = await toBase64(file);

    triggerChange(b64);
    onFilenameChange?.(file.name);
  }

  function clearFile() {
    triggerChange(undefined);
    onFilenameChange?.(undefined);
  }

  return (
    <Row gutter={8} wrap={false}>
      <Col>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
        <InputComponent type="text" disabled={true} value={filesize} />
      </Col>
      <Col>
        <Space>
          {!readOnly && (
            <Button
              icon={<FolderOpenOutlined />}
              onClick={() => {
                const fileUploadField = inputFile.current as any;
                fileUploadField.click();
              }}
            >
              {t("select")}
            </Button>
          )}
          {value && (
            <>
              <Button icon={<EyeOutlined />} onClick={openFile}>
                {t("open")}
              </Button>
              <Button
                tooltip={t("download")}
                onClick={() => {
                  downloadFile(value!, filename);
                }}
                icon={<DownloadOutlined />}
              />
              {!readOnly && (
                <Button
                  tooltip={t("clear")}
                  disabled={readOnly}
                  onClick={clearFile}
                  icon={<ClearOutlined />}
                />
              )}
            </>
          )}
        </Space>
      </Col>
    </Row>
  );
};
