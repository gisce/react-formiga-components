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
  onClickClearExport: () => void;
  title?: string;
  mustShowClearButton?: boolean;
  disabled?: boolean;
};

export const ExportModalTopBar = (props: ExportModalTopBarProps) => {
  const {
    locale,
    onClickLoadPredefined,
    title,
    onClickClearExport,
    mustShowClearButton = false,
    disabled = false,
  } = props;

  return (
    <Row style={{ paddingRight: 20 }}>
      <Col style={{ flexGrow: 1 }}>
        {title ? title : tForLang("export", locale)}
      </Col>
      <Col>
        {mustShowClearButton && (
          <Button
            style={{ marginRight: 20 }}
            onClick={onClickClearExport}
            icon={<ClearOutlined />}
            disabled={disabled}
          >
            {tForLang("clearPredefinedExport", locale)}
          </Button>
        )}
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
