import { SelectionInput } from "../../Selection";
import React, { useContext } from "react";
import { BooleanSearchProps } from "./BooleanSearch.types";
import {
  LocaleContext,
  LocaleContextType,
  tForLangContext,
} from "context/LocaleContext";

export const BooleanSearch = (props: BooleanSearchProps) => {
  const { locale } = props;

  const { t: tContext = undefined } =
    (useContext(LocaleContext) as LocaleContextType) || {};
  function t(key: string) {
    return tForLangContext(key, locale, tContext);
  }

  return (
    <SelectionInput
      selectionValues={{ true: t("true"), false: t("false") }}
      {...props}
    />
  );
};
