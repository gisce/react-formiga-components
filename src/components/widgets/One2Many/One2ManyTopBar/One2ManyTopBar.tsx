import React, { useContext } from "react";

import {
  FileAddOutlined,
  SaveOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  LoadingOutlined,
  SearchOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { Button } from "components/ui/Button";
import {
  LocaleContext,
  LocaleContextType,
  tForLangContext,
} from "context/LocaleContext";
import { Container, Separator, Title, Wrapper } from "./One2ManyTopBar.styles";
import { One2manyTopBarProps } from "./One2ManyTopBar.types";

export const One2ManyTopBar = (props: One2manyTopBarProps) => {
  const {
    title,
    readOnly = false,
    onCreateItem,
    onToggleViewMode,
    mode,
    saveButtonLoading,
    onSaveItem,
    saveButtonDisabled,
    onDelete,
    totalItems,
    currentItemIndex,
    onPreviousItem,
    onNextItem,
    isMany2Many,
    onSearchItem,
    locale,
  } = props;

  const { t: tContext = undefined } =
    (useContext(LocaleContext) as LocaleContextType) || {};
  function t(key: string) {
    return tForLangContext(key, locale, tContext);
  }

  function saveButton() {
    return (
      <Button
        tooltip={t("save")}
        icon={saveButtonLoading ? <LoadingOutlined /> : <SaveOutlined />}
        onClick={onSaveItem}
        disabled={saveButtonLoading || saveButtonDisabled || readOnly}
      />
    );
  }

  function deleteButton() {
    return (
      <Button
        tooltip={isMany2Many ? t("unlinkItems") : t("delete")}
        icon={isMany2Many ? <ApiOutlined /> : <DeleteOutlined />}
        onClick={onDelete}
        disabled={totalItems === 0 || readOnly}
      />
    );
  }

  function index() {
    let itemToShow = "_";
    if (totalItems === 0) {
      itemToShow = "_";
    } else {
      itemToShow = (currentItemIndex + 1).toString();
    }
    return (
      <span style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}>
        ({itemToShow}/{totalItems})
      </span>
    );
  }

  function itemBrowser() {
    return (
      <>
        <Separator />
        <Button
          tooltip={t("previous")}
          icon={<LeftOutlined />}
          onClick={onPreviousItem}
        />
        {index()}
        <Button
          tooltip={t("next")}
          icon={<RightOutlined />}
          onClick={onNextItem}
        />
      </>
    );
  }

  return (
    <Container>
      <Title title={title} />
      <Wrapper>
        <Button
          tooltip={t("createNew")}
          icon={<FileAddOutlined />}
          disabled={readOnly}
          onClick={onCreateItem}
        />
        {isMany2Many && (
          <Button
            tooltip={t("searchExisting")}
            icon={<SearchOutlined />}
            disabled={readOnly}
            onClick={onSearchItem}
          />
        )}
        <Separator />
        {mode === "form" && saveButton()}
        {deleteButton()}
        {mode === "form" && itemBrowser()}
        <Separator />
        <Button
          tooltip={t("toggleViewMode")}
          icon={<AlignLeftOutlined />}
          onClick={onToggleViewMode}
        />
      </Wrapper>
    </Container>
  );
};
