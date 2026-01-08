import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import {
  DatePicker as AntDatePicker,
  TimePicker as AntTimePicker,
  Tooltip,
  theme,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import {
  DateMaskedInputProps,
  DateMaskedInputType,
} from "./DateMaskedInput.types";
import {
  MaskedDateConfig,
  MaskedDateTimeConfig,
  MaskedTimeConfig,
  autocompleteDate,
  autocompleteDateTime,
  autocompleteTime,
  parseInternalToDisplay,
  parseDisplayToInternal,
  isCompleteValue,
  hasAnyDigits,
} from "./MaskedDate.helpers";
import { useRequiredStyle } from "@/hooks/useRequiredStyle";
import { useDatePickerLocale } from "../DateInput/hooks/useDatePickerLocale";

// Get config based on type
const getConfig = (type: DateMaskedInputType) => {
  switch (type) {
    case "date":
      return MaskedDateConfig;
    case "datetime":
      return MaskedDateTimeConfig;
    case "time":
      return MaskedTimeConfig;
  }
};

const InputWrapper = styled.div.attrs<{
  $required?: React.CSSProperties;
  $disabled?: boolean;
  $hasError?: boolean;
}>((props) => ({
  className: `ant-picker ant-picker-outlined${
    props.$disabled ? " ant-picker-disabled" : ""
  }${props.$hasError ? " ant-picker-status-error" : ""}`,
}))<{
  $required?: React.CSSProperties;
  $disabled?: boolean;
  $hasError?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.$required?.backgroundColor || "#fff"};
  border-radius: 6px;
`;

const StyledInput = styled(IMaskInput)<{
  $hasError?: boolean;
  $required?: React.CSSProperties;
  $isEmpty?: boolean;
  $placeholderColor?: string;
  $textColor?: string;
}>`
  flex: 1;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  font-size: 14px;
  line-height: 1.5715;
  color: ${(props) =>
    props.$isEmpty ? props.$placeholderColor : props.$textColor};
  background-color: transparent;
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

const SuffixIcon = styled.span<{ $allowClear?: boolean }>`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.$allowClear ? "pointer" : "default")};
  transition:
    color 0.2s,
    opacity 0.2s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) =>
      props.$allowClear ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.25)"};
  }
`;

const ClearIcon = styled(SuffixIcon)`
  opacity: 0;
`;

const CalendarIcon = styled(SuffixIcon)`
  opacity: 1;
`;

const InputContainer = styled.div.attrs({
  className: "ant-picker-input",
})`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;

  &:hover ${ClearIcon} {
    opacity: 1;
  }

  &:hover ${CalendarIcon} {
    opacity: 0;
    pointer-events: none;
  }
`;

// Hidden picker container - only shows the dropdown, input is invisible
const HiddenPickerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;

  /* Hide the picker input completely - use visibility:hidden instead of opacity
     to ensure it doesn't interfere with selectors while still rendering the dropdown */
  > .ant-picker {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    pointer-events: none;
  }

  /* Ensure the dropdown (rendered in portal) remains visible */
  .ant-picker-dropdown {
    visibility: visible;
  }
`;

const DateMaskedInput: React.FC<DateMaskedInputProps> = (
  props: DateMaskedInputProps,
) => {
  const {
    type,
    value,
    onChange,
    id,
    readOnly = false,
    required = false,
    timezone = "Europe/Madrid",
    placeholder,
    useZeros = false,
  } = props;

  const config = getConfig(type);
  const { token } = theme.useToken();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const skipNextFocusRef = useRef(false);
  // Track if click originated from our input area to prevent picker close/reopen flicker
  const clickedInsideRef = useRef(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  // Use undefined to mean "show displayValue", empty string means "user cleared"
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);

  const datePickerLocale = useDatePickerLocale();
  const requiredStyle = useRequiredStyle(required, readOnly);
  const effectivePlaceholder = placeholder || config.placeholder;

  // Check if the value prop is valid (for detecting invalid incoming values)
  const isValuePropValid = useMemo(() => {
    if (!value) return true; // Empty is valid (no error state)

    if (type === "time") {
      try {
        const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
        return parsed.isValid();
      } catch {
        return false;
      }
    }

    try {
      const parsed = timezone
        ? dayjs.tz(value, config.internalFormat, timezone)
        : dayjs(value, config.internalFormat);
      return parsed.isValid();
    } catch {
      return false;
    }
  }, [value, timezone, type, config]);

  // Set error state when value prop is invalid (like DateInput does)
  useEffect(() => {
    if (value && !isValuePropValid) {
      setParseError("Invalid date format");
    } else if (isValuePropValid && !inputValue) {
      // Only clear error when value becomes valid AND there's no pending user input
      setParseError(null);
    }
  }, [value, isValuePropValid, inputValue]);

  // Convert internal value to display format
  const displayValue = useMemo(() => {
    if (!value) return "";

    if (type === "time") {
      try {
        const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
        return parsed.isValid() ? parsed.format(config.displayFormat) : "";
      } catch {
        return "";
      }
    }

    return parseInternalToDisplay(
      value,
      config.internalFormat,
      config.displayFormat,
      timezone,
    );
  }, [value, timezone, type, config]);

  // Use nullish coalescing: undefined = show displayValue, "" = show empty (user cleared)
  const currentInputValue = inputValue ?? displayValue;

  // Convert value to picker format
  const pickerValue = useMemo(() => {
    if (!value) return undefined;
    try {
      if (type === "time") {
        const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
        return parsed.isValid() ? parsed : undefined;
      }
      const parsed = timezone
        ? dayjs.tz(value, config.internalFormat, timezone)
        : dayjs(value, config.internalFormat);
      return parsed.isValid() ? parsed : undefined;
    } catch {
      return undefined;
    }
  }, [value, timezone, type, config]);

  const handleAccept = useCallback((maskedValue: string) => {
    setInputValue(maskedValue);
    setParseError(null);
  }, []);

  // Autocomplete based on type
  const autocompleteFn = useCallback(
    (maskedValue: string) => {
      switch (type) {
        case "date":
          return autocompleteDate(maskedValue);
        case "datetime":
          return autocompleteDateTime(maskedValue);
        case "time":
          return autocompleteTime(maskedValue, dayjs(), useZeros);
      }
    },
    [type, useZeros],
  );

  const commitValue = useCallback(
    (maskedValue: string) => {
      // Treat empty, no digits, or placeholder-only values as clearing the field
      const isEmpty =
        !maskedValue ||
        !hasAnyDigits(maskedValue) ||
        maskedValue === effectivePlaceholder;

      if (isEmpty) {
        onChange?.(null);
        setInputValue(undefined);
        setParseError(null);
        return;
      }

      if (isCompleteValue(maskedValue, effectivePlaceholder)) {
        if (type === "time") {
          // Time values are stored as-is (HH:mm:ss)
          onChange?.(maskedValue);
          setInputValue(undefined);
          setParseError(null);
        } else {
          const internalValue = parseDisplayToInternal(
            maskedValue,
            config.displayFormat,
            config.internalFormat,
          );
          if (internalValue) {
            onChange?.(internalValue);
            setInputValue(undefined);
            setParseError(null);
          } else {
            setParseError(`Invalid ${type}`);
          }
        }
        return;
      }

      const autocompleted = autocompleteFn(maskedValue);
      if (autocompleted) {
        onChange?.(autocompleted.internalValue);
        setInputValue(undefined);
        setParseError(null);
      } else {
        setParseError(`Invalid ${type} format`);
      }
    },
    [onChange, effectivePlaceholder, type, config, autocompleteFn],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        const maskedValue = input.value;

        // On Enter, if no digits entered, autocomplete to current date/time
        if (!hasAnyDigits(maskedValue)) {
          const autocompleted = autocompleteFn("");
          if (autocompleted) {
            onChange?.(autocompleted.internalValue);
            setInputValue(undefined);
            setParseError(null);
          }
          return;
        }

        commitValue(maskedValue);
      } else if (e.key === "Escape") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;

        setPickerOpen(false);
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
      } else if (e.key === "Tab") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        const shiftKey = e.shiftKey;
        setPickerOpen(false);
        commitValue(input.value);

        // Blur current input and move focus to next/previous focusable element
        input.blur();

        // Use requestAnimationFrame to ensure DOM has updated
        requestAnimationFrame(() => {
          const focusableSelector =
            'input:not([disabled]):not([tabindex="-1"]), ' +
            'button:not([disabled]):not([tabindex="-1"]), ' +
            'select:not([disabled]):not([tabindex="-1"]), ' +
            'textarea:not([disabled]):not([tabindex="-1"]), ' +
            '[tabindex]:not([tabindex="-1"]):not([disabled])';

          const allFocusable = Array.from(
            document.querySelectorAll(focusableSelector),
          ).filter((el) => {
            const htmlEl = el as HTMLElement;
            // Must be visible and not inside picker dropdown
            return (
              htmlEl.offsetParent !== null &&
              !el.closest(".ant-picker-dropdown") &&
              getComputedStyle(htmlEl).visibility !== "hidden"
            );
          }) as HTMLElement[];

          const currentIndex = allFocusable.findIndex(
            (el) => el === inputRef.current,
          );

          if (currentIndex !== -1) {
            const nextIndex = shiftKey
              ? Math.max(0, currentIndex - 1)
              : Math.min(allFocusable.length - 1, currentIndex + 1);

            if (nextIndex !== currentIndex) {
              allFocusable[nextIndex].focus();
            }
          }
        });
      }
    },
    [commitValue, onChange, autocompleteFn],
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      const maskedValue = input.value;

      // On double-click, if no digits entered, autocomplete to current date/time
      // (same behavior as Enter key)
      if (!hasAnyDigits(maskedValue)) {
        const autocompleted = autocompleteFn("");
        if (autocompleted) {
          onChange?.(autocompleted.internalValue);
          setInputValue(undefined);
          setParseError(null);
        }
        return;
      }

      commitValue(maskedValue);
    },
    [commitValue, autocompleteFn, onChange],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // Check if focus is moving to an element inside the picker dropdown
      // If so, don't close the picker (user is interacting with it)
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (relatedTarget?.closest(".ant-picker-dropdown")) {
        return;
      }
      setPickerOpen(false);
      commitValue(e.target.value);
    },
    [commitValue],
  );

  const handleFocus = useCallback(() => {
    if (skipNextFocusRef.current) {
      skipNextFocusRef.current = false;
      return;
    }
    if (!readOnly) {
      setPickerOpen(true);
    }
  }, [readOnly]);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setPickerOpen(false);
    setInputValue(undefined);
    setParseError(null);
    if (onChange) {
      onChange(null);
    }
  };

  // Handle picker change (when user selects from dropdown)
  const handlePickerChange = useCallback(
    (date: Dayjs | null) => {
      if (!date) {
        onChange?.(null);
        setInputValue(undefined);
        return;
      }

      if (type === "time") {
        onChange?.(date.format("HH:mm:ss"));
      } else {
        onChange?.(date.format(config.internalFormat));
      }
      setInputValue(undefined);
      setParseError(null);

      // For date-only mode, close picker after selection
      if (type === "date") {
        setPickerOpen(false);
        skipNextFocusRef.current = true;
        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    },
    [type, config, onChange],
  );

  // Handle OK button click in datetime/time mode
  const handleOk = useCallback(
    (date: Dayjs) => {
      if (type === "time") {
        onChange?.(date.format("HH:mm:ss"));
      } else {
        onChange?.(date.format(config.internalFormat));
      }
      setInputValue(undefined);
      setParseError(null);
      setPickerOpen(false);
      skipNextFocusRef.current = true;
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    },
    [type, config, onChange],
  );

  // Determine which icon to show
  const Icon = type === "time" ? ClockCircleOutlined : CalendarOutlined;

  // Handle mousedown on our input area - prevents picker close/reopen flicker
  const handleWrapperMouseDown = useCallback(() => {
    clickedInsideRef.current = true;
    // Reset after a short delay (after onOpenChange would have been called)
    setTimeout(() => {
      clickedInsideRef.current = false;
    }, 100);
  }, []);

  // Render the appropriate picker based on type
  const renderPicker = () => {
    const commonProps = {
      open: pickerOpen,
      onOpenChange: (open: boolean) => {
        if (!open) {
          // Don't close if the click was on our input area
          if (clickedInsideRef.current) {
            return;
          }
          setPickerOpen(false);
        }
      },
      value: pickerValue,
      onChange: handlePickerChange,
      locale: datePickerLocale,
      getPopupContainer: () => wrapperRef.current || document.body,
      showNow: false,
      showToday: false,
      allowClear: false,
      inputReadOnly: true,
      style: { width: "100%", height: "100%" },
    };

    if (type === "time") {
      return <AntTimePicker {...commonProps} onOk={handleOk} />;
    }

    return (
      <AntDatePicker
        {...commonProps}
        showTime={type === "datetime"}
        onOk={type === "datetime" ? handleOk : undefined}
      />
    );
  };

  return (
    <Tooltip
      title={parseError}
      open={!!parseError}
      color="#ff4d4f"
      placement="topLeft"
    >
      <div style={{ position: "relative" }} ref={wrapperRef}>
        <InputWrapper
          $required={requiredStyle}
          $disabled={readOnly}
          $hasError={!!parseError}
          onMouseDown={handleWrapperMouseDown}
          onClick={() => {
            if (!readOnly) {
              setPickerOpen(true);
              inputRef.current?.focus();
            }
          }}
        >
          <InputContainer>
            <StyledInput
              inputRef={inputRef}
              id={id}
              mask={config.mask}
              lazy={true}
              placeholderChar="_"
              value={currentInputValue}
              onAccept={handleAccept}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onDoubleClick={handleDoubleClick}
              disabled={readOnly}
              $hasError={!!parseError}
              $required={requiredStyle}
              $isEmpty={!value && !hasAnyDigits(currentInputValue)}
              $placeholderColor={token.colorTextPlaceholder}
              $textColor={token.colorText}
              placeholder={effectivePlaceholder}
              style={{ paddingRight: 30 }}
            />
            {!readOnly && (
              <CalendarIcon
                className="ant-picker-suffix"
                $allowClear={false}
                onClick={() => {
                  setPickerOpen(true);
                  inputRef.current?.focus();
                }}
                style={value ? undefined : { opacity: 1 }}
              >
                <Icon style={{ fontSize: 14 }} />
              </CalendarIcon>
            )}
            {!readOnly && value && (
              <ClearIcon
                className="ant-picker-clear"
                $allowClear={true}
                data-testid="clear-button"
                onClick={handleClear}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <CloseCircleFilled style={{ fontSize: 12 }} />
              </ClearIcon>
            )}
          </InputContainer>
        </InputWrapper>

        {/* Hidden picker - only used for its dropdown */}
        <HiddenPickerWrapper>{renderPicker()}</HiddenPickerWrapper>
      </div>
    </Tooltip>
  );
};

DateMaskedInput.displayName = "DateMaskedInput";

export { DateMaskedInput };
