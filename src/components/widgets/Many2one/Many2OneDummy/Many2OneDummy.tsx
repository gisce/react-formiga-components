import React, { useContext } from "react";
import { Col, Input, Row } from "antd";
import { RequiredMany2OneDummy } from "./Many2OneDummy.styles";
import { SearchOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { Many2OneDummyProps } from "./Many2OneDummy.types";
import { Button } from "components/ui/Button";
import {
  LocaleContext,
  LocaleContextType,
  tForLangContext,
} from "context/LocaleContext";

export const Many2OneDummy = (props: Many2OneDummyProps) => {
  const {
    required,
    readOnly,
    value,
    onChange,
    suffix,
    searching = false,
    showFolderButton = true,
    disableFolderButton = false,
    onClickFolderButton,
    showSearchButton = true,
    disableSearchButton = false,
    onClickSearchButton,
    onElementLostFocus,
    onEnterPressed,
    locale,
  } = props;

  const { t: tContext = undefined } =
    (useContext(LocaleContext) as LocaleContextType) || {};
  function t(key: string) {
    return tForLangContext(key, locale, tContext);
  }

  const CustomInput: any =
    required && !readOnly ? RequiredMany2OneDummy : Input;

  async function onKeyUp(event: any) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      onEnterPressed?.();
    }
  }

  return (
    <Row gutter={8} wrap={false}>
      <Col flex="auto">
        <CustomInput
          type="text"
          value={value}
          disabled={readOnly || searching}
          onChange={(e: any) => {
            onChange?.(e.target.value);
          }}
          onBlur={() => {
            onElementLostFocus?.();
          }}
          onKeyUp={onKeyUp}
          suffix={suffix}
        />
      </Col>
      {showFolderButton && (
        <Col flex="32px">
          <Button
            icon={<FolderOpenOutlined />}
            disabled={disableFolderButton || searching}
            onClick={() => {
              onClickFolderButton?.();
            }}
            tabIndex={-1}
            tooltip={t("open")}
          />
        </Col>
      )}
      {showSearchButton && (
        <Col flex="32px">
          <Button
            icon={<SearchOutlined />}
            loading={searching}
            disabled={disableSearchButton || searching || readOnly}
            onClick={() => {
              onClickSearchButton?.();
            }}
            tabIndex={-1}
            tooltip={t("search")}
          />
        </Col>
      )}
    </Row>
  );
};
