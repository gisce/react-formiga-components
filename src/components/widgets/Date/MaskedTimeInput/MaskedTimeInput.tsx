import { memo, useCallback, useMemo, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { TimePicker, Tooltip } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { MaskedTimeInputProps } from "./MaskedTimeInput.types";
import {
  MaskedTimeConfig,
  autocompleteTime,
  isCompleteValue,
  hasAnyDigits,
} from "../MaskedDateInput/helpers/MaskedDate.helpers";
import { useRequiredStyle } from "@/hooks/useRequiredStyle";

const InputWrapper = styled.div<{ $hasSuffix?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(IMaskInput)<{
  $hasError?: boolean;
  $required?: React.CSSProperties;
  $hasSuffix?: boolean;
}>`
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  padding-right: ${(props) => (props.$hasSuffix ? "30px" : "11px")};
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

const SuffixIcon = styled.span`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

const HiddenPicker = styled(TimePicker)`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

const MaskedTimeInput: React.FC<MaskedTimeInputProps> = memo((props) => {
  const {
    value,
    onChange,
    id,
    readOnly = false,
    required = false,
    showClockButton = true,
    placeholder = MaskedTimeConfig.placeholder,
    useZeros = false,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<{ blur: () => void; focus: () => void } | null>(
    null,
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const requiredStyle = useRequiredStyle(required, readOnly);

  const displayValue = useMemo(() => {
    if (!value) return "";
    try {
      const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
      return parsed.isValid()
        ? parsed.format(MaskedTimeConfig.displayFormat)
        : "";
    } catch {
      return "";
    }
  }, [value]);

  const currentInputValue = inputValue || displayValue;

  const handleAccept = useCallback((maskedValue: string) => {
    setInputValue(maskedValue);
    setParseError(null);
  }, []);

  const commitValue = useCallback(
    (maskedValue: string, shouldAutocompleteEmpty = false) => {
      if (!maskedValue || !hasAnyDigits(maskedValue)) {
        if (shouldAutocompleteEmpty) {
          const autocompleted = autocompleteTime("", dayjs(), useZeros);
          if (autocompleted) {
            onChange?.(autocompleted.internalValue);
            setInputValue("");
            setParseError(null);
            return;
          }
        }
        onChange?.(null);
        setInputValue("");
        setParseError(null);
        return;
      }

      if (isCompleteValue(maskedValue, placeholder)) {
        onChange?.(maskedValue);
        setInputValue("");
        setParseError(null);
        return;
      }

      const autocompleted = autocompleteTime(maskedValue, dayjs(), useZeros);
      if (autocompleted) {
        onChange?.(autocompleted.internalValue);
        setInputValue("");
        setParseError(null);
      } else {
        setParseError("Invalid time format");
      }
    },
    [onChange, placeholder, useZeros],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        commitValue(input.value, true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;

        commitValue(input.value, true);

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

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      commitValue(input.value, true);
    },
    [commitValue],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (pickerOpen) return;
      commitValue(e.target.value);
    },
    [commitValue, pickerOpen],
  );

  const handlePickerChange = useCallback(
    (time: Dayjs | null) => {
      setPickerOpen(false);
      if (time) {
        const timeValue = time.format(MaskedTimeConfig.internalFormat);
        onChange?.(timeValue);
        setInputValue("");
        setParseError(null);
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    },
    [onChange],
  );

  const handleClockClick = useCallback(() => {
    setPickerOpen(true);
  }, []);

  const pickerValue = useMemo(() => {
    if (!value) return undefined;
    try {
      const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
      return parsed.isValid() ? parsed : undefined;
    } catch {
      return undefined;
    }
  }, [value]);

  const showSuffix = showClockButton && !readOnly;

  return (
    <Tooltip
      title={parseError}
      open={!!parseError}
      color="#ff4d4f"
      placement="topLeft"
    >
      <InputWrapper $hasSuffix={showSuffix}>
        <StyledInput
          inputRef={inputRef}
          id={id}
          mask={MaskedTimeConfig.mask}
          lazy={false}
          placeholderChar="_"
          value={currentInputValue}
          onAccept={handleAccept}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onDoubleClick={handleDoubleClick}
          disabled={readOnly}
          $hasError={!!parseError}
          $required={requiredStyle}
          $hasSuffix={showSuffix}
        />
        {showSuffix && (
          <>
            <SuffixIcon onClick={handleClockClick}>
              <ClockCircleOutlined />
            </SuffixIcon>
            <HiddenPicker
              ref={pickerRef as any}
              open={pickerOpen}
              onOpenChange={setPickerOpen}
              value={pickerValue}
              onChange={handlePickerChange}
              showNow={false}
              format={MaskedTimeConfig.displayFormat}
            />
          </>
        )}
      </InputWrapper>
    </Tooltip>
  );
});

MaskedTimeInput.displayName = "MaskedTimeInput";

export { MaskedTimeInput };
