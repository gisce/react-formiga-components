import { tForLang } from "@/context";
import { Locale } from "@/context/LocaleContext";
import { Row, Col } from "antd";
import React from "react";
import { Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";

export type ExportModalTitleProps = {
  locale: Locale;
  onClickPredefinedButton: () => void;
};

export const ExportModalTitle = (props: ExportModalTitleProps) => {
  const { locale, onClickPredefinedButton } = props;

  return (
    <Row style={{ paddingRight: 20 }}>
      <Col style={{ flexGrow: 1 }}>{tForLang("export", locale)}</Col>
      <Col>
        <Button onClick={onClickPredefinedButton} icon={<BarsOutlined />}>
          {tForLang("loadPredefinedExport", locale)}
        </Button>
      </Col>
    </Row>
  );
};
