import { BaseFieldProps } from "@/components/form/Field";
import {
  TranslatableDataMethods,
  TranslatableModalBaseProps,
} from "../TranslatableModal/TranslatableModal.types";

export type TranslatableInputProps = BaseFieldProps<string> &
  TranslatableDataMethods & {
    showButton?: boolean;
    modalOpts: TranslatableModalBaseProps;
    mustSaveBeforeTranslate?: boolean;
  };
