import { DatePicker as AntDatePicker, Tooltip } from "antd";
import React, { useCallback, useMemo, memo, useState } from "react";
import { Dayjs } from "dayjs";
import { useDatePickerLocale } from "./hooks/useDatePickerLocale";
import {
  DateMode,
  DatePickerConfig,
  parseDateSafely,
} from "./helpers/DatePicker.helpers";
import { useDatePickerHandlers } from "./hooks/useDatePickerHandlers";
import { DateInputProps } from "./DateInput.types";
import { useRequiredStyle } from "@/hooks/useRequiredStyle";

const DateInput: React.FC<DateInputProps> = memo((props: DateInputProps) => {
  const {
    value,
    onChange,
    showTime,
    id,
    readOnly,
    required,
    timezone = "Europe/Madrid", // TODO: This is hardcoded because server assumes this TZ for the moment
  } = props;

  const datePickerLocale = useDatePickerLocale();
  const requiredStyle = useRequiredStyle(required, !!readOnly);
  const mode: DateMode = showTime ? "time" : "date";
  const [parseError, setParseError] = useState<string | null>(null);

  const internalFormat = DatePickerConfig[mode].dateInternalFormat;

  // Parse date value using the timezone from ooui
  const dateValue = useMemo(() => {
    if (!value) return undefined;

    try {
      const parsed = parseDateSafely(value, internalFormat, timezone);

      if (!parsed || !parsed.isValid()) {
        throw new Error("Invalid date format");
      }

      setParseError(null);
      return parsed;
    } catch (error) {
      console.error({ error, value, timezone, mode });
      const errorMessage =
        error instanceof Error ? error.message : "Invalid date";
      setParseError(errorMessage);
      return undefined;
    }
  }, [value, internalFormat, timezone, mode]);

  const handleChange = useCallback(
    (momentDate: Dayjs | null) => {
      if (!momentDate) {
        onChange?.(null);
        return;
      }
      try {
        const formattedDate = momentDate.format(internalFormat);
        setParseError(null);
        onChange?.(formattedDate);
      } catch (error) {
        console.error({ error, timezone, mode });
        const errorMessage =
          error instanceof Error ? error.message : "Invalid date";
        setParseError(errorMessage);
      }
    },
    [onChange, timezone, internalFormat, mode],
  );

  const { handleKeyDown, handleBlur, handleDoubleClick } =
    useDatePickerHandlers({
      mode,
      showTime,
      onChange,
    });

  const pickerConfig = useMemo(
    () => ({
      style: {
        width: "100%",
        ...requiredStyle,
        ...(parseError && { borderColor: "#ff4d4f" }),
      },
      placeholder: DatePickerConfig[mode].placeholder,
      format: DatePickerConfig[mode].dateDisplayFormat,
    }),
    [mode, requiredStyle, parseError],
  );

  return (
    <Tooltip
      title={parseError}
      open={!!parseError}
      color="#ff4d4f"
      placement="topLeft"
    >
      <div onDoubleClick={handleDoubleClick} onKeyDownCapture={handleKeyDown}>
        <AntDatePicker
          {...pickerConfig}
          id={id}
          disabled={readOnly}
          picker="date"
          showTime={showTime}
          value={dateValue}
          defaultPickerValue={dateValue}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e as any)}
          onKeyDown={(e) => handleKeyDown(e as any)}
          showNow={false}
          showToday={false}
          locale={datePickerLocale}
          status={parseError ? "error" : undefined}
        />
      </div>
    </Tooltip>
  );
});

DateInput.displayName = "DateInput";
const MemoizedDateInput = memo(DateInput);

export { MemoizedDateInput as DateInput };
