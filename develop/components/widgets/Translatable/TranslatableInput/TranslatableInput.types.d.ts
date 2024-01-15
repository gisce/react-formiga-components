import { BaseFieldProps } from '../../../../components/form/Field';
import { TranslatableDataMethods } from "../TranslatableModal/TranslatableModal.types";
export type TranslatableInputProps = BaseFieldProps<string> & TranslatableDataMethods & {
    showButton?: boolean;
    modalOpts: {
        id?: number;
        model: string;
    };
    onMustSave?: () => boolean;
};
//# sourceMappingURL=TranslatableInput.types.d.ts.map