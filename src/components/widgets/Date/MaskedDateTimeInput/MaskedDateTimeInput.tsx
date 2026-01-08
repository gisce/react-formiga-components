import { memo, useCallback, useMemo, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { Button, DatePicker, Tooltip } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { MaskedDateTimeInputProps } from "./MaskedDateTimeInput.types";
import {
  MaskedDateTimeConfig,
  autocompleteDateTime,
  parseInternalToDisplay,
  parseDisplayToInternal,
  isCompleteValue,
  hasAnyDigits,
} from "../MaskedDateInput/helpers/MaskedDate.helpers";
import { useRequiredStyle } from "@/hooks/useRequiredStyle";
import { useDatePickerLocale } from "../DateInput/hooks/useDatePickerLocale";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const StyledInput = styled(IMaskInput)<{
  $hasError?: boolean;
  $required?: React.CSSProperties;
}>`
  flex: 1;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  font-size: 14px;
  line-height: 1.5715;
  color: rgba(0, 0, 0, 0.88);
  background-color: ${(props) => props.$required?.backgroundColor || "#fff"};
  border: 1px solid ${(props) => (props.$hasError ? "#ff4d4f" : "#d9d9d9")};
  border-radius: 6px;
  transition: all 0.2s;
  font-family: inherit;

  &:focus {
    border-color: ${(props) => (props.$hasError ? "#ff4d4f" : "#4096ff")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$hasError ? "rgba(255, 77, 79, 0.1)" : "rgba(5, 145, 255, 0.1)"};
    outline: none;
  }

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#ff4d4f" : "#4096ff")};
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    cursor: not-allowed;
  }
`;

const CalendarButton = styled(Button)`
  flex-shrink: 0;
`;

const HiddenPicker = styled(DatePicker)`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

const MaskedDateTimeInput: React.FC<MaskedDateTimeInputProps> = memo(
  (props) => {
    const {
      value,
      onChange,
      id,
      readOnly = false,
      required = false,
      timezone = "Europe/Madrid",
      showCalendarButton = true,
      placeholder = MaskedDateTimeConfig.placeholder,
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const pickerRef = useRef<{ blur: () => void; focus: () => void } | null>(
      null,
    );
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [parseError, setParseError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const datePickerLocale = useDatePickerLocale();
    const requiredStyle = useRequiredStyle(required, readOnly);

    const displayValue = useMemo(() => {
      if (!value) return "";
      return parseInternalToDisplay(
        value,
        MaskedDateTimeConfig.internalFormat,
        MaskedDateTimeConfig.displayFormat,
        timezone,
      );
    }, [value, timezone]);

    const currentInputValue = inputValue || displayValue;

    const handleAccept = useCallback((maskedValue: string) => {
      setInputValue(maskedValue);
      setParseError(null);
    }, []);

    const commitValue = useCallback(
      (maskedValue: string) => {
        if (!maskedValue || !hasAnyDigits(maskedValue)) {
          onChange?.(null);
          setInputValue("");
          setParseError(null);
          return;
        }

        if (isCompleteValue(maskedValue, placeholder)) {
          const internalValue = parseDisplayToInternal(
            maskedValue,
            MaskedDateTimeConfig.displayFormat,
            MaskedDateTimeConfig.internalFormat,
          );
          if (internalValue) {
            onChange?.(internalValue);
            setInputValue("");
            setParseError(null);
          } else {
            setParseError("Invalid date/time");
          }
          return;
        }

        const autocompleted = autocompleteDateTime(maskedValue);
        if (autocompleted) {
          onChange?.(autocompleted.internalValue);
          setInputValue("");
          setParseError(null);
        } else {
          setParseError("Invalid date/time format");
        }
      },
      [onChange, placeholder],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const input = e.target as HTMLInputElement;
          commitValue(input.value);
        } else if (e.key === "Escape") {
          e.preventDefault();
          const input = e.target as HTMLInputElement;

          commitValue(input.value);

          setTimeout(() => {
            const focusableElements =
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            const elements = Array.from(
              document.querySelectorAll(focusableElements),
            ) as HTMLElement[];
            const index = elements.indexOf(input);
            if (index > -1 && index < elements.length - 1) {
              elements[index + 1].focus();
            }
          }, 50);
        }
      },
      [commitValue],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (calendarOpen) return;
        commitValue(e.target.value);
      },
      [commitValue, calendarOpen],
    );

    const handleCalendarChange = useCallback(
      (date: unknown, dateString: string | string[]) => {
        setCalendarOpen(false);
        if (date && dayjs.isDayjs(date)) {
          const internalValue = date.format(
            MaskedDateTimeConfig.internalFormat,
          );
          onChange?.(internalValue);
          setInputValue("");
          setParseError(null);
        }
        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      },
      [onChange],
    );

    const handleCalendarClick = useCallback(() => {
      setCalendarOpen(true);
    }, []);

    const pickerValue = useMemo(() => {
      if (!value) return undefined;
      try {
        const parsed = timezone
          ? dayjs.tz(value, MaskedDateTimeConfig.internalFormat, timezone)
          : dayjs(value, MaskedDateTimeConfig.internalFormat);
        return parsed.isValid() ? parsed : undefined;
      } catch {
        return undefined;
      }
    }, [value, timezone]);

    return (
      <Tooltip
        title={parseError}
        open={!!parseError}
        color="#ff4d4f"
        placement="topLeft"
      >
        <InputWrapper>
          <StyledInput
            inputRef={inputRef}
            id={id}
            mask={MaskedDateTimeConfig.mask}
            lazy={false}
            placeholderChar="_"
            value={currentInputValue}
            onAccept={handleAccept}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            disabled={readOnly}
            $hasError={!!parseError}
            $required={requiredStyle}
          />
          {showCalendarButton && !readOnly && (
            <>
              <CalendarButton
                icon={<CalendarOutlined />}
                onClick={handleCalendarClick}
                size="middle"
              />
              <HiddenPicker
                ref={pickerRef as any}
                open={calendarOpen}
                onOpenChange={setCalendarOpen}
                value={pickerValue}
                onChange={handleCalendarChange}
                showTime
                showNow={false}
                showToday={false}
                locale={datePickerLocale}
              />
            </>
          )}
        </InputWrapper>
      </Tooltip>
    );
  },
);

MaskedDateTimeInput.displayName = "MaskedDateTimeInput";

export { MaskedDateTimeInput };
