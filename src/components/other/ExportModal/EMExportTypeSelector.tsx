import { FieldSet } from "@/components/ui";
import { tForLang } from "@/context";
import { Radio, RadioChangeEvent } from "antd";
import React, { useCallback } from "react";
import { EMExportTypeSelectorProps } from "./EMExportTypeSelector.types";

export const EMExportTypeSelector = (props: EMExportTypeSelectorProps) => {
  const { value, onChange, locale } = props;

  const onExportTypeChange = useCallback((e: RadioChangeEvent) => {
    onChange(e.target.value);
  }, []);

  return (
    <FieldSet label={tForLang("saveAs", locale)}>
      <Radio.Group onChange={onExportTypeChange} value={value}>
        <Radio value={"csv"}>CSV</Radio>
        <Radio value={"xlsx"}>Excel</Radio>
      </Radio.Group>
    </FieldSet>
  );
};
