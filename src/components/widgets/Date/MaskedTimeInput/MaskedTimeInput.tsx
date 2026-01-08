import { memo, useCallback, useMemo, useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { TimePicker, Tooltip } from "antd";
import { ClockCircleOutlined, CloseCircleFilled } from "@ant-design/icons";
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
  position: relative;
`;

const StyledInput = styled(IMaskInput)<{
  $hasError?: boolean;
  $required?: React.CSSProperties;
  $isEmpty?: boolean;
}>`
  flex: 1;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  font-size: 14px;
  line-height: 1.5715;
  color: ${(props) =>
    props.$isEmpty ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.88)"};
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

const SuffixIcon = styled.span<{ $allowClear?: boolean }>`
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.$allowClear ? "pointer" : "default")};
  transition: color 0.2s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) =>
      props.$allowClear ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.25)"};
  }
`;

const InputContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const HiddenPickerTrigger = styled(TimePicker)`
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
  pointer-events: none;
  width: 1px;
  height: 1px;
`;

const MaskedTimeInput: React.FC<MaskedTimeInputProps> = memo(
  (props: MaskedTimeInputProps) => {
    const {
      value,
      onChange,
      id,
      readOnly = false,
      required = false,
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
    const [isHovered, setIsHovered] = useState(false);

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
      (maskedValue: string) => {
        if (!maskedValue || !hasAnyDigits(maskedValue)) {
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
          const maskedValue = input.value;

          // On Enter, if no digits entered, autocomplete to current time
          if (!hasAnyDigits(maskedValue)) {
            const autocompleted = autocompleteTime("", dayjs(), useZeros);
            if (autocompleted) {
              onChange?.(autocompleted.internalValue);
              setInputValue("");
              setParseError(null);
            }
            return;
          }

          commitValue(maskedValue);
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
      [commitValue, onChange, useZeros],
    );

    const handleDoubleClick = useCallback(
      (e: React.MouseEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        commitValue(input.value);
      },
      [commitValue],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        // Close picker and commit value
        setPickerOpen(false);
        commitValue(e.target.value);
      },
      [commitValue],
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

    const handleFocus = useCallback(() => {
      if (!readOnly) {
        setPickerOpen(true);
      }
    }, [readOnly]);

    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange?.(null);
        setInputValue("");
        setParseError(null);
        inputRef.current?.focus();
      },
      [onChange],
    );

    const pickerValue = useMemo(() => {
      if (!value) return undefined;
      try {
        const parsed = dayjs(`2000-01-01 ${value}`, "YYYY-MM-DD HH:mm:ss");
        return parsed.isValid() ? parsed : undefined;
      } catch {
        return undefined;
      }
    }, [value]);

    return (
      <Tooltip
        title={parseError}
        open={!!parseError}
        color="#ff4d4f"
        placement="topLeft"
      >
        <InputWrapper
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <InputContainer>
            <StyledInput
              inputRef={inputRef}
              id={id}
              mask={MaskedTimeConfig.mask}
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
              $isEmpty={!value && !hasAnyDigits(inputValue)}
              placeholder={MaskedTimeConfig.placeholder}
              style={{ paddingRight: 30 }}
            />
            {!readOnly && (
              <SuffixIcon
                $allowClear={!!value && isHovered}
                onClick={value && isHovered ? handleClear : undefined}
              >
                {value && isHovered ? (
                  <CloseCircleFilled style={{ fontSize: 12 }} />
                ) : (
                  <ClockCircleOutlined style={{ fontSize: 14 }} />
                )}
              </SuffixIcon>
            )}
            <HiddenPickerTrigger
              ref={pickerRef as any}
              open={pickerOpen}
              onOpenChange={setPickerOpen}
              value={pickerValue}
              onChange={handlePickerChange}
              showNow={false}
              format={MaskedTimeConfig.displayFormat}
              placement="bottomLeft"
              tabIndex={-1}
            />
          </InputContainer>
        </InputWrapper>
      </Tooltip>
    );
  },
);

MaskedTimeInput.displayName = "MaskedTimeInput";

export { MaskedTimeInput };
