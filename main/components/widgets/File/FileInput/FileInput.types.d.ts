import { BaseFieldProps } from '../../../../components/form/Field';
export type FileInputProps = BaseFieldProps<string> & {
    filename?: string;
    onFilenameChange?: (filename?: string) => void;
};
//# sourceMappingURL=FileInput.types.d.ts.map