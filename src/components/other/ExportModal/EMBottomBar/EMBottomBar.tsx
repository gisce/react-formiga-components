import React from "react";
import { Button, Col, Row, Space } from "antd";
import { SaveOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { EMBottomBarProps } from "./EMBottomBar.types";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";

export const EMBottomBar = (props: EMBottomBarProps) => {
  const { onSavePredefined, ...rest } = props;
  const { loading, locale } = props;

  return (
    <ModalBottomBar
      okText={tForLang("export", locale)}
      rightAdditionalButtons={
        <>
          <Button
            icon={<SaveOutlined />}
            onClick={onSavePredefined}
            disabled={loading}
          >
            {tForLang("savePredefinedExport", locale)}
          </Button>
        </>
      }
      {...rest}
    />
  );
};
