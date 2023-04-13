import React from "react";
import { Button, Col, Row, Space } from "antd";
import { SaveOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { EMBottomBarProps } from "./EMBottomBar.types";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";

export const EMBottomBar = (props: EMBottomBarProps) => {
  const {
    onSavePredefined,
    onSaveNewPredefined,
    showSaveCurrentExport = false,
    ...rest
  } = props;
  const { loading, locale } = props;

  return (
    <ModalBottomBar
      rightAdditionalButtons={
        <>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={onSaveNewPredefined}
            disabled={loading}
          >
            {tForLang("saveNewPredefinedExport", locale)}
          </Button>
          {showSaveCurrentExport && (
            <Button
              icon={<SaveOutlined />}
              onClick={onSavePredefined}
              disabled={loading}
            >
              {tForLang("savePredefinedExport", locale)}
            </Button>
          )}
        </>
      }
      {...rest}
    />
  );
};
