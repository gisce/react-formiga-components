import dayjs from "dayjs";
import {
  autocompleteDate,
  autocompleteDateTime,
  autocompleteTime,
  parseInternalToDisplay,
  parseDisplayToInternal,
  isCompleteValue,
  hasAnyDigits,
  MaskedDateConfig,
  MaskedDateTimeConfig,
  MaskedTimeConfig,
} from "./MaskedDate.helpers";

describe("MaskedDate.helpers", () => {
  // Use a fixed date for consistent tests
  const fixedNow = dayjs("2024-06-15 10:30:45");

  describe("autocompleteDate", () => {
    it("should return current date when input is empty", () => {
      const result = autocompleteDate("", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("15/06/2024");
      expect(result!.internalValue).toBe("2024-06-15");
    });

    it("should autocomplete day only with current month and year", () => {
      const result = autocompleteDate("25", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("25/06/2024");
      expect(result!.internalValue).toBe("2024-06-25");
    });

    it("should autocomplete day and month with current year", () => {
      const result = autocompleteDate("25/03", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("25/03/2024");
      expect(result!.internalValue).toBe("2024-03-25");
    });

    it("should handle complete date input", () => {
      const result = autocompleteDate("25/03/2023", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("25/03/2023");
      expect(result!.internalValue).toBe("2023-03-25");
    });

    it("should return null for invalid day", () => {
      const result = autocompleteDate("ab", fixedNow);
      expect(result).toBeNull();
    });

    it("should return null for empty day with month", () => {
      const result = autocompleteDate("/03", fixedNow);
      expect(result).toBeNull();
    });
  });

  describe("autocompleteDateTime", () => {
    it("should return current datetime when input is empty", () => {
      const result = autocompleteDateTime("", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("15/06/2024 10:30:45");
      expect(result!.internalValue).toBe("2024-06-15 10:30:45");
    });

    it("should autocomplete day with current time", () => {
      const result = autocompleteDateTime("25", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toContain("25/06/2024");
      expect(result!.internalValue).toContain("2024-06-25");
    });

    it("should autocomplete date with partial time", () => {
      const result = autocompleteDateTime("25/03/2024 14", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toContain("25/03/2024 14:");
      expect(result!.internalValue).toContain("2024-03-25 14:");
    });

    it("should handle complete datetime input", () => {
      const result = autocompleteDateTime("25/03/2024 14:30:00", fixedNow);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("25/03/2024 14:30:00");
      expect(result!.internalValue).toBe("2024-03-25 14:30:00");
    });

    it("should return null for invalid day", () => {
      const result = autocompleteDateTime("ab/03/2024", fixedNow);
      expect(result).toBeNull();
    });
  });

  describe("autocompleteTime", () => {
    it("should return current time when input is empty", () => {
      const result = autocompleteTime("", fixedNow, false);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("10:30:45");
      expect(result!.internalValue).toBe("10:30:45");
    });

    it("should autocomplete hours with current minutes/seconds", () => {
      const result = autocompleteTime("14", fixedNow, false);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("14:30:45");
      expect(result!.internalValue).toBe("14:30:45");
    });

    it("should autocomplete hours with zeros when useZeros is true", () => {
      const result = autocompleteTime("14", fixedNow, true);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("14:00:00");
      expect(result!.internalValue).toBe("14:00:00");
    });

    it("should autocomplete hours and minutes", () => {
      const result = autocompleteTime("14:25", fixedNow, false);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toContain("14:25:");
    });

    it("should handle complete time input", () => {
      const result = autocompleteTime("14:25:30", fixedNow, false);
      expect(result).not.toBeNull();
      expect(result!.displayValue).toBe("14:25:30");
      expect(result!.internalValue).toBe("14:25:30");
    });

    it("should return null for invalid hours", () => {
      const result = autocompleteTime("ab", fixedNow, false);
      expect(result).toBeNull();
    });
  });

  describe("parseInternalToDisplay", () => {
    it("should return empty string for undefined value", () => {
      const result = parseInternalToDisplay(
        undefined,
        MaskedDateConfig.internalFormat,
        MaskedDateConfig.displayFormat,
      );
      expect(result).toBe("");
    });

    it("should return empty string for empty value", () => {
      const result = parseInternalToDisplay(
        "",
        MaskedDateConfig.internalFormat,
        MaskedDateConfig.displayFormat,
      );
      expect(result).toBe("");
    });

    it("should convert date from internal to display format", () => {
      const result = parseInternalToDisplay(
        "2024-03-25",
        MaskedDateConfig.internalFormat,
        MaskedDateConfig.displayFormat,
      );
      expect(result).toBe("25/03/2024");
    });

    it("should convert datetime from internal to display format", () => {
      const result = parseInternalToDisplay(
        "2024-03-25 14:30:00",
        MaskedDateTimeConfig.internalFormat,
        MaskedDateTimeConfig.displayFormat,
      );
      expect(result).toBe("25/03/2024 14:30:00");
    });

    it("should return empty string for invalid date", () => {
      const result = parseInternalToDisplay(
        "invalid-date",
        MaskedDateConfig.internalFormat,
        MaskedDateConfig.displayFormat,
      );
      expect(result).toBe("");
    });
  });

  describe("parseDisplayToInternal", () => {
    it("should return null for empty value", () => {
      const result = parseDisplayToInternal(
        "",
        MaskedDateConfig.displayFormat,
        MaskedDateConfig.internalFormat,
      );
      expect(result).toBeNull();
    });

    it("should return null for value with underscores (incomplete)", () => {
      const result = parseDisplayToInternal(
        "25/__/2024",
        MaskedDateConfig.displayFormat,
        MaskedDateConfig.internalFormat,
      );
      expect(result).toBeNull();
    });

    it("should convert date from display to internal format", () => {
      const result = parseDisplayToInternal(
        "25/03/2024",
        MaskedDateConfig.displayFormat,
        MaskedDateConfig.internalFormat,
      );
      expect(result).toBe("2024-03-25");
    });

    it("should convert datetime from display to internal format", () => {
      const result = parseDisplayToInternal(
        "25/03/2024 14:30:00",
        MaskedDateTimeConfig.displayFormat,
        MaskedDateTimeConfig.internalFormat,
      );
      expect(result).toBe("2024-03-25 14:30:00");
    });

    it("should return null for invalid date", () => {
      const result = parseDisplayToInternal(
        "invalid-date",
        MaskedDateConfig.displayFormat,
        MaskedDateConfig.internalFormat,
      );
      expect(result).toBeNull();
    });
  });

  describe("isCompleteValue", () => {
    it("should return true for complete date value", () => {
      const result = isCompleteValue(
        "25/03/2024",
        MaskedDateConfig.placeholder,
      );
      expect(result).toBe(true);
    });

    it("should return false for incomplete date value", () => {
      const result = isCompleteValue(
        "25/03/____",
        MaskedDateConfig.placeholder,
      );
      expect(result).toBe(false);
    });

    it("should return false for shorter value", () => {
      const result = isCompleteValue("25/03", MaskedDateConfig.placeholder);
      expect(result).toBe(false);
    });

    it("should return true for complete datetime value", () => {
      const result = isCompleteValue(
        "25/03/2024 14:30:00",
        MaskedDateTimeConfig.placeholder,
      );
      expect(result).toBe(true);
    });

    it("should return true for complete time value", () => {
      const result = isCompleteValue("14:30:00", MaskedTimeConfig.placeholder);
      expect(result).toBe(true);
    });
  });

  describe("hasAnyDigits", () => {
    it("should return true for string with digits", () => {
      expect(hasAnyDigits("25/03/2024")).toBe(true);
      expect(hasAnyDigits("abc123")).toBe(true);
      expect(hasAnyDigits("1")).toBe(true);
    });

    it("should return false for string without digits", () => {
      expect(hasAnyDigits("")).toBe(false);
      expect(hasAnyDigits("__/__/____")).toBe(false);
      expect(hasAnyDigits("abc")).toBe(false);
    });
  });

  describe("Config constants", () => {
    it("should have correct MaskedDateConfig", () => {
      expect(MaskedDateConfig.placeholder).toBe("__/__/____");
      expect(MaskedDateConfig.displayFormat).toBe("DD/MM/YYYY");
      expect(MaskedDateConfig.internalFormat).toBe("YYYY-MM-DD");
      expect(MaskedDateConfig.mask).toBe("00/00/0000");
    });

    it("should have correct MaskedDateTimeConfig", () => {
      expect(MaskedDateTimeConfig.placeholder).toBe("__/__/____ __:__:__");
      expect(MaskedDateTimeConfig.displayFormat).toBe("DD/MM/YYYY HH:mm:ss");
      expect(MaskedDateTimeConfig.internalFormat).toBe("YYYY-MM-DD HH:mm:ss");
      expect(MaskedDateTimeConfig.mask).toBe("00/00/0000 00:00:00");
    });

    it("should have correct MaskedTimeConfig", () => {
      expect(MaskedTimeConfig.placeholder).toBe("__:__:__");
      expect(MaskedTimeConfig.displayFormat).toBe("HH:mm:ss");
      expect(MaskedTimeConfig.internalFormat).toBe("HH:mm:ss");
      expect(MaskedTimeConfig.mask).toBe("00:00:00");
    });
  });
});
