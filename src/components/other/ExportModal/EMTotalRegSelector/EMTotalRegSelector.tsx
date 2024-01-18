import { FieldSet } from "@/components/ui";
import { useLocale } from "@/context";
import { Radio, RadioChangeEvent } from "antd";
import { useCallback } from "react";
import { EMTotalRegSelectorProps } from "./EMTotalRegSelector.types";
import { Interweave } from "interweave";

export const EMTotalRegSelector = (props: EMTotalRegSelectorProps) => {
  const {
    value,
    onChange,
    totalRegisters,
    selectedRegistersToExport,
    visibleRegisters,
  } = props;
  const { t } = useLocale();

  const onExportTypeChange = useCallback(
    (e: RadioChangeEvent) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  const title = selectedRegistersToExport
    ? t("registersToExportSelectedSummary")
    : t("registersToExportVisibleSummary");

  const text = title
    .replace("{total}", totalRegisters.toString())
    .replace(
      "{selected}",
      selectedRegistersToExport
        ? selectedRegistersToExport?.toString()
        : visibleRegisters.toString(),
    );

  const option = selectedRegistersToExport
    ? t("registersSelection")
    : t("registersVisible");

  return (
    <FieldSet label={t("registersToExport")}>
      <p>
        <Interweave content={text} />
      </p>
      <Radio.Group
        onChange={onExportTypeChange}
        value={value}
        style={{ paddingTop: 5 }}
      >
        <Radio value={"selected"}>
          {option + ` (${selectedRegistersToExport || visibleRegisters})`}
        </Radio>
        <Radio value={"all"}>
          {t("registersSelectionAll") + ` (${totalRegisters})`}
        </Radio>
      </Radio.Group>
    </FieldSet>
  );
};
