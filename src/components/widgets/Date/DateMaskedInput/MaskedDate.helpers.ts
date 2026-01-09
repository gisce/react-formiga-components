import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";

export const MaskedDateConfig = {
  placeholder: "__/__/____",
  displayFormat: "DD/MM/YYYY",
  internalFormat: "YYYY-MM-DD",
  mask: "00/00/0000",
} as const;

export const MaskedDateTimeConfig = {
  placeholder: "__/__/____ __:__:__",
  displayFormat: "DD/MM/YYYY HH:mm:ss",
  internalFormat: "YYYY-MM-DD HH:mm:ss",
  mask: "00/00/0000 00:00:00",
} as const;

export const MaskedTimeConfig = {
  placeholder: "__:__:__",
  displayFormat: "HH:mm:ss",
  internalFormat: "HH:mm:ss",
  mask: "00:00:00",
} as const;

export type AutocompleteResult = {
  displayValue: string;
  internalValue: string;
} | null;

const parsePartialDate = (
  value: string,
): { day?: number; month?: number; year?: number } => {
  const parts = value.split("/");
  return {
    day: parts[0] ? parseInt(parts[0], 10) : undefined,
    month: parts[1] ? parseInt(parts[1], 10) : undefined,
    year: parts[2] ? parseInt(parts[2], 10) : undefined,
  };
};

const parsePartialTime = (
  value: string,
): { hours?: number; minutes?: number; seconds?: number } => {
  const parts = value.split(":");
  return {
    hours: parts[0] ? parseInt(parts[0], 10) : undefined,
    minutes: parts[1] ? parseInt(parts[1], 10) : undefined,
    seconds: parts[2] ? parseInt(parts[2], 10) : undefined,
  };
};

export const autocompleteDate = (
  inputValue: string,
  now: Dayjs = dayjs(),
): AutocompleteResult => {
  const trimmed = inputValue.trim();

  if (!trimmed) {
    const displayValue = now.format(MaskedDateConfig.displayFormat);
    const internalValue = now.format(MaskedDateConfig.internalFormat);
    return { displayValue, internalValue };
  }

  const { day, month, year } = parsePartialDate(trimmed);

  if (day === undefined || isNaN(day)) {
    return null;
  }

  const resultMonth =
    month !== undefined && !isNaN(month) ? month - 1 : now.month();
  const resultYear = year !== undefined && !isNaN(year) ? year : now.year();

  const result = dayjs()
    .year(resultYear)
    .month(resultMonth)
    .date(day)
    .startOf("day");

  if (!result.isValid()) {
    return null;
  }

  return {
    displayValue: result.format(MaskedDateConfig.displayFormat),
    internalValue: result.format(MaskedDateConfig.internalFormat),
  };
};

export const autocompleteDateTime = (
  inputValue: string,
  now: Dayjs = dayjs(),
): AutocompleteResult => {
  const trimmed = inputValue.trim();

  if (!trimmed) {
    const displayValue = now.format(MaskedDateTimeConfig.displayFormat);
    const internalValue = now.format(MaskedDateTimeConfig.internalFormat);
    return { displayValue, internalValue };
  }

  const [datePart, timePart] = trimmed.split(" ");
  const { day, month, year } = parsePartialDate(datePart || "");

  if (day === undefined || isNaN(day)) {
    return null;
  }

  const resultMonth =
    month !== undefined && !isNaN(month) ? month - 1 : now.month();
  const resultYear = year !== undefined && !isNaN(year) ? year : now.year();

  let result = dayjs().year(resultYear).month(resultMonth).date(day);

  if (timePart) {
    const { hours, minutes, seconds } = parsePartialTime(timePart);
    if (hours !== undefined && !isNaN(hours)) {
      result = result.hour(hours);
      result = result.minute(
        minutes !== undefined && !isNaN(minutes) ? minutes : now.minute(),
      );
      result = result.second(
        seconds !== undefined && !isNaN(seconds) ? seconds : now.second(),
      );
    } else {
      result = result
        .hour(now.hour())
        .minute(now.minute())
        .second(now.second());
    }
  } else {
    result = result.hour(now.hour()).minute(now.minute()).second(now.second());
  }

  if (!result.isValid()) {
    return null;
  }

  return {
    displayValue: result.format(MaskedDateTimeConfig.displayFormat),
    internalValue: result.format(MaskedDateTimeConfig.internalFormat),
  };
};

export const autocompleteTime = (
  inputValue: string,
  now: Dayjs = dayjs(),
  useZeros = false,
): AutocompleteResult => {
  const trimmed = inputValue.trim();

  if (!trimmed) {
    const displayValue = now.format(MaskedTimeConfig.displayFormat);
    const internalValue = now.format(MaskedTimeConfig.internalFormat);
    return { displayValue, internalValue };
  }

  const { hours, minutes, seconds } = parsePartialTime(trimmed);

  if (hours === undefined || isNaN(hours)) {
    return null;
  }

  const resultMinutes =
    minutes !== undefined && !isNaN(minutes)
      ? minutes
      : useZeros
      ? 0
      : now.minute();
  const resultSeconds =
    seconds !== undefined && !isNaN(seconds)
      ? seconds
      : useZeros
      ? 0
      : now.second();

  const result = dayjs()
    .hour(hours)
    .minute(resultMinutes)
    .second(resultSeconds);

  if (!result.isValid()) {
    return null;
  }

  return {
    displayValue: result.format(MaskedTimeConfig.displayFormat),
    internalValue: result.format(MaskedTimeConfig.internalFormat),
  };
};

export const parseInternalToDisplay = (
  value: string | undefined,
  internalFormat: string,
  displayFormat: string,
  timezone?: string,
): string => {
  if (!value) return "";

  try {
    const parsed = timezone
      ? dayjs.tz(value, internalFormat, timezone)
      : dayjs(value, internalFormat);

    if (!parsed.isValid()) return "";

    return parsed.format(displayFormat);
  } catch {
    return "";
  }
};

export const parseDisplayToInternal = (
  value: string,
  displayFormat: string,
  internalFormat: string,
  timezone?: string,
): string | null => {
  if (!value || value.includes("_")) return null;

  try {
    // Parse in the context of the specified timezone for consistency
    const parsed = timezone
      ? dayjs.tz(value, displayFormat, timezone)
      : dayjs(value, displayFormat);

    if (!parsed.isValid()) return null;

    return parsed.format(internalFormat);
  } catch {
    return null;
  }
};

export const isCompleteValue = (
  value: string,
  placeholder: string,
): boolean => {
  return value.length === placeholder.length && !value.includes("_");
};

export const hasAnyDigits = (value: string): boolean => {
  return /\d/.test(value);
};
