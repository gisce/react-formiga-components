import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";

export type DateMode = "date" | "time";

export const DatePickerConfig = {
  date: {
    placeholder: "__/__/____",
    dateDisplayFormat: "DD/MM/YYYY",
    dateInternalFormat: "YYYY-MM-DD",
  },
  time: {
    placeholder: "__/__/____ __:__:__",
    dateDisplayFormat: "DD/MM/YYYY HH:mm:ss",
    dateInternalFormat: "YYYY-MM-DD HH:mm:ss",
  },
} as const;

export type DateTimePatterns = {
  day: RegExp;
  dayMonth: RegExp;
  fullDate: RegExp;
  withHours: RegExp;
  withMinutes: RegExp;
  withSeconds: RegExp;
};

export const createFormatRegex = (format: string): RegExp => {
  return new RegExp(
    "^" +
      format
        .replace(/DD/g, "\\d{2}")
        .replace(/MM/g, "\\d{2}")
        .replace(/YYYY/g, "\\d{4}")
        .replace(/HH/g, "\\d{2}")
        .replace(/mm/g, "\\d{2}")
        .replace(/ss/g, "\\d{2}")
        .replace(/\//g, "\\/")
        .replace(/\s/g, "\\s") +
      "$",
  );
};

export const createDateTimePatterns = (): DateTimePatterns => ({
  day: createFormatRegex("DD"),
  dayMonth: createFormatRegex("DD/MM"),
  fullDate: createFormatRegex("DD/MM/YYYY"),
  withHours: createFormatRegex("DD/MM/YYYY HH"),
  withMinutes: createFormatRegex("DD/MM/YYYY HH:mm"),
  withSeconds: createFormatRegex("DD/MM/YYYY HH:mm:ss"),
});

const normalizeInput = (value: string): string => {
  return value.replace(/[\/:]+$/, "");
};

type UpdateDateTimeParams = {
  currentValue: string | undefined;
  now: Dayjs;
  mode: DateMode;
  showTime: boolean;
  onChange: (value: string) => void;
};

export const updateDateTime = (params: UpdateDateTimeParams) => {
  const { currentValue, now, mode, showTime, onChange } = params;
  const patterns = createDateTimePatterns();
  const normalized = currentValue ? normalizeInput(currentValue) : "";

  // Handle undefined or empty value
  if (!normalized || normalized.trim() === "") {
    onChange(now.format(DatePickerConfig[mode].dateInternalFormat));
    return;
  }

  // Handle day only
  if (patterns.day.test(normalized)) {
    const newDate = now.date(parseInt(normalized));
    onChange(newDate.format(DatePickerConfig[mode].dateInternalFormat));
  }

  // Handle day and month
  if (patterns.dayMonth.test(normalized)) {
    const [day, month] = normalized.split("/").map((n) => parseInt(n));
    const newDate = now.date(day).month(month - 1);
    onChange(newDate.format(DatePickerConfig[mode].dateInternalFormat));
  }

  // Handle full date
  if (patterns.fullDate.test(normalized)) {
    const [day, month, year] = normalized.split("/").map((n) => parseInt(n));
    const newDate = now
      .date(day)
      .month(month - 1)
      .year(year);

    if (!showTime) {
      onChange(newDate.format(DatePickerConfig.date.dateInternalFormat));
    }

    onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
  }

  // Handle time components
  if (showTime) {
    const [datePart, timePart] = normalized.split(" ");
    const [day, month, year] = datePart.split("/").map((n) => parseInt(n));
    let newDate = now
      .date(day)
      .month(month - 1)
      .year(year);

    if (patterns.withHours.test(normalized)) {
      const [hours] = timePart.split(":").map((n) => parseInt(n));
      newDate = newDate.hour(hours);
      onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
    }

    if (patterns.withMinutes.test(normalized)) {
      const [hours, minutes] = timePart.split(":").map((n) => parseInt(n));
      newDate = newDate.hour(hours).minute(minutes);
      onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
    }
  }
};

export const shouldHandleEnter = (
  currentValue: string,
  showTime: boolean,
): boolean => {
  if (!currentValue) return true;

  const normalized = normalizeInput(currentValue);
  const patterns = createDateTimePatterns();
  return (
    patterns.day.test(normalized) ||
    patterns.dayMonth.test(normalized) ||
    patterns.fullDate.test(normalized) ||
    (showTime &&
      (patterns.fullDate.test(normalized) ||
        patterns.withHours.test(normalized) ||
        patterns.withMinutes.test(normalized)))
  );
};

export const parseDateSafely = (
  value: string,
  format: string,
  timezone?: string,
): Dayjs | null => {
  try {
    return dayjs.tz(value, format, timezone);
  } catch (e) {
    console.error("Parse error:", e);
    return null;
  }
};
