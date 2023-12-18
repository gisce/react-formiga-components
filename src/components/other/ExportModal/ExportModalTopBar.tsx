import { tForLang } from "@/context";
import { Locale } from "@/context/LocaleContext";
import { Row, Col } from "antd";
import React from "react";
import { Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { ClearOutlined } from "@ant-design/icons";

export type ExportModalTopBarProps = {
  locale: Locale;
  onClickLoadPredefined: () => void;
  title?: string;
  disabled?: boolean;
};

export const ExportModalTopBar = (props: ExportModalTopBarProps) => {
  const {
    locale,
    onClickLoadPredefined,
    title,
    disabled = false,
  } = props;

  return (
    <Row style={{ paddingRight: 20 }}>
      <Col style={{ flexGrow: 1 }}>
        {title ? title : tForLang("export", locale)}
      </Col>
      <Col>
        <Button
          disabled={disabled}
          onClick={onClickLoadPredefined}
          icon={<BarsOutlined />}
        >
          {tForLang("loadPredefinedExport", locale)}
        </Button>
      </Col>
    </Row>
  );
};
