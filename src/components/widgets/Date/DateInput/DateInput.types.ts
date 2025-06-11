export type DateInputProps = {
  value?: string;
  onChange?: (value: string | null | undefined) => void;
  showTime?: boolean;
  id: string;
  readOnly: boolean;
  required: boolean;
  timezone?: string;
};
