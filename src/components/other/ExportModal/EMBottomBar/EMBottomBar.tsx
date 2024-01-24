import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useLocale } from "@/context/LocaleContext";
import { EMBottomBarProps } from "./EMBottomBar.types";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";

export const EMBottomBar = (props: EMBottomBarProps) => {
  const { onSavePredefined, ...rest } = props;
  const { loading } = props;
  const { t } = useLocale();

  return (
    <ModalBottomBar
      okText={t("export")}
      rightAdditionalButtons={
        <>
          <Button
            icon={<SaveOutlined />}
            onClick={onSavePredefined}
            disabled={loading}
          >
            {t("savePredefinedExport")}
          </Button>
        </>
      }
      {...rest}
    />
  );
};
