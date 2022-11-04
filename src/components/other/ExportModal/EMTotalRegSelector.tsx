import { FieldSet } from "@/components/ui";
import { Locale, tForLang } from "@/context";
import { Radio, RadioChangeEvent } from "antd";
import React, { useCallback } from "react";
import { EMTotalRegSelectorProps } from "./EMTotalRegSelector.types";

export const EMTotalRegSelector = (props: EMTotalRegSelectorProps) => {
  const { value, onChange, locale, totalRegisters, selectedRegistersToExport } =
    props;

  const onExportTypeChange = useCallback((e: RadioChangeEvent) => {
    onChange(e.target.value);
  }, []);

  const text = tForLang("registersToExportSummary", locale)
    .replace("{total}", totalRegisters.toString())
    .replace("{selected}", selectedRegistersToExport?.toString());

  return (
    <FieldSet label={tForLang("registersToExport", locale)}>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <Radio.Group onChange={onExportTypeChange} value={value}>
        <Radio value={"selected"}>
          {tForLang("registersSelection", locale)}
        </Radio>
        <Radio value={"all"}>{tForLang("registersSelectionAll", locale)}</Radio>
      </Radio.Group>
    </FieldSet>
  );
};
