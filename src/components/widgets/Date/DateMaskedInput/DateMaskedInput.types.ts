export type DateMaskedInputType = "date" | "datetime" | "time";

export type DateMaskedInputProps = {
  /** Type of input: date, datetime, or time */
  type: DateMaskedInputType;
  /** Value in internal format (YYYY-MM-DD, YYYY-MM-DD HH:mm:ss, or HH:mm:ss) */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string | null | undefined) => void;
  /** Input element id */
  id?: string;
  /** Whether the field is read-only */
  readOnly?: boolean;
  /** Whether the field is required (shows yellow background) */
  required?: boolean;
  /** Timezone for date/datetime parsing (default: Europe/Madrid) */
  timezone?: string;
  /** Custom placeholder (defaults based on type) */
  placeholder?: string;
  /** For time type: use zeros instead of current time for autocomplete */
  useZeros?: boolean;
};
