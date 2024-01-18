import { FieldSet } from "@/components/ui";
import { useLocale } from "@/context";
import { Radio, RadioChangeEvent } from "antd";
import { useCallback } from "react";
import { EMExportTypeSelectorProps } from "./EMExportTypeSelector.types";

export const EMExportTypeSelector = (props: EMExportTypeSelectorProps) => {
  const { value, onChange } = props;
  const { t } = useLocale();

  const onExportTypeChange = useCallback(
    (e: RadioChangeEvent) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <FieldSet label={t("saveAs")}>
      <Radio.Group onChange={onExportTypeChange} value={value}>
        <Radio value={"xlsx"}>Excel</Radio>
        <Radio value={"csv"}>CSV</Radio>
      </Radio.Group>
    </FieldSet>
  );
};
