import { BaseFieldProps } from "@/components/form/Field";
import {
  TranslatableDataMethods,
  TranslatableModalBaseProps,
} from "../TranslatableModal/TranslatableModal.types";

export type TranslatableInputProps = BaseFieldProps<string> &
  TranslatableDataMethods & {
    showButton: boolean;
    modalVisible: boolean;
    modalOpts: TranslatableModalBaseProps;
    onClick: () => void;
  };
