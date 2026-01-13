import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import {
  DateMaskedInputPickerStyles,
  InputWrapper,
  StyledInput,
  ClearIcon,
  CalendarIcon,
  InputContainer,
  HiddenPickerWrapper,
} from "./DateMaskedInput.styles";

function getConfig(type: DateMaskedInputType) {
  switch (type) {
    case "date":
      return MaskedDateConfig;
    case "datetime":
      return MaskedDateTimeConfig;
    case "time":
      return MaskedTimeConfig;
  }
}

const DateMaskedInputComponent = memo(function DateMaskedInput(
  props: DateMaskedInputProps,
): React.ReactElement {
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
  const clickedInsideRef = useRef(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);

  const datePickerLocale = useDatePickerLocale();
  const requiredStyle = useRequiredStyle(required, readOnly);
  const effectivePlaceholder = placeholder || config.placeholder;

  const isValuePropValid = useMemo(() => {
    if (!value) return true;

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

  useEffect(() => {
    if (value && !isValuePropValid) {
      setParseError("Invalid date format");
    } else if (isValuePropValid && !inputValue) {
      setParseError(null);
    }
  }, [value, isValuePropValid, inputValue]);

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

  const currentInputValue = inputValue ?? displayValue;

  const pickerValue = useMemo(() => {
    if (inputValue !== undefined && inputValue !== "") {
      try {
        if (type === "time") {
          const parsed = dayjs(
            `2000-01-01 ${inputValue}`,
            "YYYY-MM-DD HH:mm:ss",
          );
          return parsed.isValid() ? parsed : undefined;
        }
        const parsed = dayjs(inputValue, config.displayFormat);
        if (parsed.isValid()) {
          return timezone
            ? dayjs.tz(
                parsed.format(config.internalFormat),
                config.internalFormat,
                timezone,
              )
            : parsed;
        }
        return undefined;
      } catch {
        return undefined;
      }
    }

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
  }, [value, inputValue, timezone, type, config]);

  const clearError = useCallback(() => {
    setInputValue(undefined);
    setParseError(null);
  }, []);

  const handleAccept = useCallback((maskedValue: string) => {
    setInputValue(maskedValue);
    setParseError(null);
  }, []);

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
      const isEmpty =
        !maskedValue ||
        !hasAnyDigits(maskedValue) ||
        maskedValue === effectivePlaceholder;

      if (isEmpty) {
        onChange?.(null);
        clearError();
        return;
      }

      if (isCompleteValue(maskedValue, effectivePlaceholder)) {
        if (type === "time") {
          onChange?.(maskedValue);
          clearError();
        } else {
          const internalValue = parseDisplayToInternal(
            maskedValue,
            config.displayFormat,
            config.internalFormat,
            timezone,
          );
          if (internalValue) {
            onChange?.(internalValue);
            clearError();
          } else {
            setParseError(`Invalid ${type} format`);
          }
        }
        return;
      }

      const autocompleted = autocompleteFn(maskedValue);
      if (autocompleted) {
        onChange?.(autocompleted.internalValue);
        clearError();
      } else {
        setParseError(`Invalid ${type} format`);
      }
    },
    [
      onChange,
      effectivePlaceholder,
      type,
      config,
      autocompleteFn,
      timezone,
      clearError,
    ],
  );

  const autocompleteEmpty = useCallback(() => {
    const autocompleted = autocompleteFn("");
    if (autocompleted) {
      onChange?.(autocompleted.internalValue);
      clearError();
    }
  }, [autocompleteFn, onChange, clearError]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        const maskedValue = input.value;

        if (!hasAnyDigits(maskedValue)) {
          autocompleteEmpty();
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

        input.blur();

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
    [commitValue, autocompleteEmpty],
  );

  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      const maskedValue = input.value;

      if (!hasAnyDigits(maskedValue)) {
        autocompleteEmpty();
        return;
      }

      commitValue(maskedValue);
    },
    [commitValue, autocompleteEmpty],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
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

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setPickerOpen(false);
      clearError();
      onChange?.(null);
    },
    [onChange, clearError],
  );

  const handlePickerChange = useCallback(
    (date: Dayjs | null) => {
      if (!date) {
        onChange?.(null);
        clearError();
        return;
      }

      if (type === "date") {
        onChange?.(date.format(config.internalFormat));
        clearError();
        setPickerOpen(false);
        skipNextFocusRef.current = true;
        setTimeout(() => inputRef.current?.focus(), 50);
      }
    },
    [type, config, onChange, clearError],
  );

  const updateInputFromDate = useCallback(
    (date: Dayjs) => {
      setInputValue(date.format(config.displayFormat));
      setParseError(null);
    },
    [config],
  );

  const handleDateCellClick = useCallback(
    (date: Dayjs) => {
      const currentTime = pickerValue || dayjs();
      const newDateTime = date
        .hour(currentTime.hour())
        .minute(currentTime.minute())
        .second(currentTime.second());
      updateInputFromDate(newDateTime);
    },
    [pickerValue, updateInputFromDate],
  );

  const handleMonthCellClick = useCallback(
    (month: number) => {
      const currentDate = pickerValue || dayjs();
      updateInputFromDate(currentDate.month(month));
    },
    [pickerValue, updateInputFromDate],
  );

  const handleYearCellClick = useCallback(
    (year: number) => {
      const currentDate = pickerValue || dayjs();
      updateInputFromDate(currentDate.year(year));
    },
    [pickerValue, updateInputFromDate],
  );

  const cellRender: React.ComponentProps<typeof AntDatePicker>["cellRender"] =
    useCallback(
      (
        current: string | number | Dayjs,
        info: { type: string; originNode: React.ReactNode },
      ) => {
        if (
          info.type === "date" &&
          dayjs.isDayjs(current) &&
          type === "datetime"
        ) {
          return (
            <div
              className="ant-picker-cell-inner"
              onClick={(e) => {
                e.stopPropagation();
                handleDateCellClick(current);
              }}
            >
              {current.date()}
            </div>
          );
        }
        if (info.type === "month" && dayjs.isDayjs(current)) {
          return (
            <div onClick={() => handleMonthCellClick(current.month())}>
              {info.originNode}
            </div>
          );
        }
        if (info.type === "year" && dayjs.isDayjs(current)) {
          return (
            <div onClick={() => handleYearCellClick(current.year())}>
              {info.originNode}
            </div>
          );
        }
        return info.originNode;
      },
      [handleDateCellClick, handleMonthCellClick, handleYearCellClick, type],
    );

  const panelRender = useCallback(
    (originPanel: React.ReactNode) => {
      const handlePanelClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const timeCell = target.closest(
          ".ant-picker-time-panel-cell",
        ) as HTMLElement;
        if (!timeCell) return;

        const column = timeCell.closest(".ant-picker-time-panel-column");
        if (!column) return;

        const panel = e.currentTarget as HTMLElement;
        const columns = Array.from(
          panel.querySelectorAll(".ant-picker-time-panel-column"),
        );
        const columnIndex = columns.indexOf(column);

        const cellValue = parseInt(
          timeCell.querySelector(".ant-picker-time-panel-cell-inner")
            ?.textContent || "0",
          10,
        );

        const currentDate = pickerValue || dayjs();
        let newDateTime: Dayjs;
        if (columnIndex === 0) {
          newDateTime = currentDate.hour(cellValue);
        } else if (columnIndex === 1) {
          newDateTime = currentDate.minute(cellValue);
        } else {
          newDateTime = currentDate.second(cellValue);
        }

        updateInputFromDate(newDateTime);
      };

      return <div onClick={handlePanelClick}>{originPanel}</div>;
    },
    [pickerValue, updateInputFromDate],
  );

  const handleOk = useCallback(
    (date: Dayjs) => {
      const format = type === "time" ? "HH:mm:ss" : config.internalFormat;
      onChange?.(date.format(format));
      clearError();
      setPickerOpen(false);
      skipNextFocusRef.current = true;
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [type, config, onChange, clearError],
  );

  const Icon = type === "time" ? ClockCircleOutlined : CalendarOutlined;

  const handleWrapperMouseDown = useCallback(() => {
    clickedInsideRef.current = true;
    setTimeout(() => {
      clickedInsideRef.current = false;
    }, 100);
  }, []);

  const handleWrapperClick = useCallback(() => {
    if (!readOnly) {
      setPickerOpen(true);
      inputRef.current?.focus();
    }
  }, [readOnly]);

  const handleIconClick = useCallback(() => {
    if (!readOnly) {
      setPickerOpen(true);
      inputRef.current?.focus();
    }
  }, [readOnly]);

  const handleClearMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleOpenChange = useCallback((open: boolean) => {
    if (!open && !clickedInsideRef.current) {
      setPickerOpen(false);
    }
  }, []);

  const getPopupContainer = useCallback(() => document.body, []);

  const pickerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const wrapperStyle = useMemo(() => ({ position: "relative" as const }), []);
  const inputPaddingStyle = useMemo(() => ({ paddingRight: 30 }), []);
  const iconStyle = useMemo(() => ({ fontSize: 14 }), []);
  const clearIconStyle = useMemo(() => ({ fontSize: 12 }), []);
  const opacityStyle = useMemo(() => ({ opacity: 1 }), []);

  const renderPicker = () => {
    const commonProps = {
      open: pickerOpen,
      onOpenChange: handleOpenChange,
      value: pickerValue,
      onChange: handlePickerChange,
      locale: datePickerLocale,
      getPopupContainer,
      showNow: false,
      showToday: false,
      allowClear: false,
      inputReadOnly: true,
      style: pickerStyle,
    };

    if (type === "time") {
      return (
        <AntTimePicker
          {...commonProps}
          panelRender={panelRender}
          onOk={handleOk}
          popupClassName="date-masked-input-picker-dropdown"
        />
      );
    }

    return (
      <AntDatePicker
        {...commonProps}
        showTime={type === "datetime"}
        cellRender={cellRender}
        panelRender={type === "datetime" ? panelRender : undefined}
        onOk={type === "datetime" ? handleOk : undefined}
        popupClassName="date-masked-input-picker-dropdown"
      />
    );
  };

  return (
    <>
      <DateMaskedInputPickerStyles />
      <Tooltip
        title={parseError}
        open={!!parseError}
        color={token.colorError}
        placement="topLeft"
      >
        <div style={wrapperStyle} ref={wrapperRef}>
          <InputWrapper
            $required={requiredStyle}
            $disabled={readOnly}
            $hasError={!!parseError}
            $colorBgContainer={token.colorBgContainer}
            onMouseDown={handleWrapperMouseDown}
            onClick={handleWrapperClick}
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
                $colorError={token.colorError}
                $colorBorder={token.colorBorder}
                $colorPrimary={token.colorPrimary}
                $colorErrorBg={token.colorErrorBg}
                $colorPrimaryBg={token.colorPrimaryBg}
                $colorTextDisabled={token.colorTextDisabled}
                $colorBgContainerDisabled={token.colorBgContainerDisabled}
                placeholder={effectivePlaceholder}
                style={inputPaddingStyle}
              />
              {!readOnly && (
                <CalendarIcon
                  className="ant-picker-suffix"
                  $allowClear={false}
                  $colorTextQuaternary={token.colorTextQuaternary}
                  $colorTextSecondary={token.colorTextSecondary}
                  onClick={handleIconClick}
                  style={value ? undefined : opacityStyle}
                >
                  <Icon style={iconStyle} />
                </CalendarIcon>
              )}
              {!readOnly && value && (
                <ClearIcon
                  className="ant-picker-clear"
                  $allowClear={true}
                  $colorTextQuaternary={token.colorTextQuaternary}
                  $colorTextSecondary={token.colorTextSecondary}
                  data-testid="clear-button"
                  onClick={handleClear}
                  onMouseDown={handleClearMouseDown}
                >
                  <CloseCircleFilled style={clearIconStyle} />
                </ClearIcon>
              )}
            </InputContainer>
          </InputWrapper>

          <HiddenPickerWrapper>{renderPicker()}</HiddenPickerWrapper>
        </div>
      </Tooltip>
    </>
  );
});

DateMaskedInputComponent.displayName = "DateMaskedInput";

export { DateMaskedInputComponent as DateMaskedInput };
