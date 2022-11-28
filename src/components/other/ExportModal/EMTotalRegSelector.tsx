import { FieldSet } from "@/components/ui";
import { tForLang } from "@/context";
import { Radio, RadioChangeEvent } from "antd";
import React, { useCallback } from "react";
import { EMTotalRegSelectorProps } from "./EMTotalRegSelector.types";
import { Interweave } from "interweave";

export const EMTotalRegSelector = (props: EMTotalRegSelectorProps) => {
  const {
    value,
    onChange,
    locale,
    totalRegisters,
    selectedRegistersToExport,
    visibleRegisters,
  } = props;

  const onExportTypeChange = useCallback((e: RadioChangeEvent) => {
    onChange(e.target.value);
  }, []);

  const title = selectedRegistersToExport
    ? tForLang("registersToExportSelectedSummary", locale)
    : tForLang("registersToExportVisibleSummary", locale);

  const text = title
    .replace("{total}", totalRegisters.toString())
    .replace(
      "{selected}",
      selectedRegistersToExport
        ? selectedRegistersToExport?.toString()
        : visibleRegisters.toString()
    );

  const option = selectedRegistersToExport
    ? tForLang("registersSelection", locale)
    : tForLang("registersVisible", locale);

  return (
    <FieldSet label={tForLang("registersToExport", locale)}>
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
          {tForLang("registersSelectionAll", locale) + ` (${totalRegisters})`}
        </Radio>
      </Radio.Group>
    </FieldSet>
  );
};
