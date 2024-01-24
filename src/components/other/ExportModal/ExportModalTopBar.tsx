import { useLocale } from "@/context";
import { Row, Col, Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";

export type ExportModalTopBarProps = {
  onClickLoadPredefined: () => void;
  title?: string;
  disabled?: boolean;
};

export const ExportModalTopBar = (props: ExportModalTopBarProps) => {
  const { onClickLoadPredefined, title, disabled = false } = props;
  const { t } = useLocale();

  return (
    <Row style={{ paddingRight: 20 }}>
      <Col style={{ flexGrow: 1 }}>{title || t("export")}</Col>
      <Col>
        <Button
          disabled={disabled}
          onClick={onClickLoadPredefined}
          icon={<BarsOutlined />}
        >
          {t("loadPredefinedExport")}
        </Button>
      </Col>
    </Row>
  );
};
