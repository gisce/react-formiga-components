import moment from "moment";
import { getMomentValue } from "./DateSearch.helper";
import { defaultDateFormat } from "./DateSearch.types";

describe("DateSearch.helper", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  describe("in getMomentValue method", () => {
    it("should return undefined if value is undefined", () => {
      const result = getMomentValue(undefined);
      expect(result).toBeUndefined();
    });
    it("should return from value and to value as null if we only pass from", () => {
      const result = getMomentValue(["12/12/2020", undefined]);
      const momentExpected = moment("12/12/2020", defaultDateFormat);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(momentExpected.toISOString());
      expect(result[1]).toBe(null);
    });
    it("should return to value and from value as null if we only pass to", () => {
      const result = getMomentValue([undefined, "01/01/2020"]);
      const momentExpected = moment("01/01/2020", defaultDateFormat);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(momentExpected.toISOString());
      expect(result[0]).toBe(null);
    });
    it("should return from and to values", () => {
      const result = getMomentValue(["12/12/2020", "01/01/2020"]);
      const moment1Expected = moment("12/12/2020", defaultDateFormat);
      const moment2Expected = moment("01/01/2020", defaultDateFormat);

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(moment1Expected.toISOString());
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(moment2Expected.toISOString());
    });
    it("should return null array if we pass a null array", () => {
      const result = getMomentValue([null, null]);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBe(null);
      expect(result[1]).toBe(null);
    });
  });
});
