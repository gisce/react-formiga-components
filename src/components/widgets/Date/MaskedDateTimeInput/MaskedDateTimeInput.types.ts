export type MaskedDateTimeInputProps = {
  value?: string;
  onChange?: (value: string | null | undefined) => void;
  id: string;
  readOnly?: boolean;
  required?: boolean;
  timezone?: string;
  showCalendarButton?: boolean;
  placeholder?: string;
};
