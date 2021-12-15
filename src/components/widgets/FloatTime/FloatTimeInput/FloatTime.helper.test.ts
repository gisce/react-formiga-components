import { parseStringToFloat, parseFloatToString } from "./FloatTime.helper";

describe("FloatTime.helper", () => {
  describe("in parseStringToFloat method", () => {
    it("should return undefined if value is undefined", () => {
      const result = parseStringToFloat(undefined);
      expect(result).toBeUndefined();
    });
    it("should return zero if value is 00:00", () => {
      const result = parseStringToFloat("00:00");
      expect(result).toBe(0);
    });
    it("should return 1.25 if value is 01:15", () => {
      const result = parseStringToFloat("01:15");
      expect(result).toBe(1.25);
    });
  });
  describe("in parseFloatToString method", () => {
    it("should return undefined if value is undefined", () => {
      const result = parseStringToFloat(undefined);
      expect(result).toBeUndefined();
    });
    it("should return 00:00 if value is zero", () => {
      const result = parseFloatToString(0);
      expect(result).toBe("00:00");
    });
    it("should return 01:15 if value is 1.25", () => {
      const result = parseFloatToString(1.25);
      expect(result).toBe("01:15");
    });
  });
});
