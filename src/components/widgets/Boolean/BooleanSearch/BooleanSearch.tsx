import { SelectionInput } from "../../Selection";
import { BooleanSearchProps } from "./BooleanSearch.types";
import { useLocale } from "@/context/LocaleContext";

export const BooleanSearch = (props: BooleanSearchProps) => {
  const { locale } = props;

  const { t } = useLocale(locale);

  return (
    <SelectionInput
      selectionValues={{ true: t("true"), false: t("false") }}
      {...props}
    />
  );
};
