export type MaskedTimeInputProps = {
  value?: string;
  onChange?: (value: string | null | undefined) => void;
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  useZeros?: boolean;
};
