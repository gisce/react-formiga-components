import { useCallback, useRef } from "react";
import dayjs from "@/helpers/dayjs";
import {
  DateMode,
  DatePickerConfig,
  shouldHandleEnter,
  updateDateTime,
} from "../helpers/DatePicker.helpers";

type UseDatePickerHandlersParams = {
  mode: DateMode;
  showTime?: boolean;
  onChange?: (value: string | null | undefined) => void;
};

export const useDatePickerHandlers = ({
  mode,
  showTime = false,
  onChange,
}: UseDatePickerHandlersParams) => {
  const escapeHandled = useRef(false);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const input = e.target;
      if (input.value) {
        const dayJsDate = dayjs(
          input.value,
          DatePickerConfig[mode].dateDisplayFormat,
        ).format(DatePickerConfig[mode].dateInternalFormat);
        onChange?.(dayJsDate);
      }
    },
    [mode, onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // If the event was already handled by a parent component, don't handle it again
      if (e.defaultPrevented) {
        return;
      }

      if (e.key === "Enter") {
        const input = e.target as HTMLInputElement;
        const currentValue = input.value;

        if (!shouldHandleEnter(currentValue, showTime)) {
          return;
        }

        e.preventDefault();

        updateDateTime({
          currentValue,
          now: dayjs(),
          mode,
          showTime,
          onChange: (value) => onChange?.(value),
        });
      } else if (e.key === "Escape" && !escapeHandled.current) {
        escapeHandled.current = true;
        // Reset the flag after a short delay
        setTimeout(() => {
          escapeHandled.current = false;
        }, 200);

        e.preventDefault();
        e.stopPropagation(); // Stop the event from bubbling up

        const input = e.currentTarget;
        if (input.value === "") {
          onChange?.(null);
        } else {
          const dayJsDate = dayjs(
            input.value,
            DatePickerConfig[mode].dateDisplayFormat,
          ).format(DatePickerConfig[mode].dateInternalFormat);
          onChange?.(dayJsDate);
        }

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const elements = Array.from(
          document.querySelectorAll(focusableElements),
        ) as HTMLElement[];
        const index = elements.indexOf(input);

        setTimeout(() => {
          if (index > -1 && index < elements.length - 1) {
            elements[index + 1].focus();
          }
        }, 100);
      } else if (e.key === "Tab") {
        // Close picker before Tab navigates away
        e.preventDefault();

        const input = e.currentTarget;
        if (input.value !== "") {
          const dayJsDate = dayjs(
            input.value,
            DatePickerConfig[mode].dateDisplayFormat,
          ).format(DatePickerConfig[mode].dateInternalFormat);
          onChange?.(dayJsDate);
        }

        // Blur input to close the picker
        input.blur();

        // Manually move focus to next/previous element based on Shift key
        setTimeout(() => {
          const focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
          const elements = Array.from(
            document.querySelectorAll(focusableElements),
          ).filter((el) => {
            // Exclude elements inside picker dropdown
            return !el.closest(".ant-picker-dropdown");
          }) as HTMLElement[];
          const index = elements.indexOf(input);
          if (e.shiftKey) {
            // Shift+Tab: move to previous element
            if (index > 0) {
              elements[index - 1].focus();
            }
          } else {
            // Tab: move to next element
            if (index > -1 && index < elements.length - 1) {
              elements[index + 1].focus();
            }
          }
        }, 0);
      }
    },
    [showTime, mode, onChange],
  );

  return {
    handleKeyDown,
    handleBlur,
  };
};
