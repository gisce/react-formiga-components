import moment from "moment";
import {
  getMomentDateValue,
  getMomentTimeValue,
  convertMomentDateArrayToStringArray,
  convertMomentTimeArrayToStringArray,
} from "./DateTimeSearch.helper";
import { defaultDateFormat } from "../DateSearch/DateSearch.types";
import {
  defaultTimeFormat,
  defaultDateForTimeValue,
} from "./DateTimeSearch.types";

describe("DateTimeSearch.helper", () => {
  describe("in getMomentDateValue method", () => {
    it("should return array of null if value is undefined", () => {
      const result = getMomentDateValue(undefined);
      expect(result[0]).toBe(null);
      expect(result[1]).toBe(null);
    });
    it("should return from value and to value as null if we only pass from", () => {
      const result = getMomentDateValue([
        ["01/01/2020", null],
        [null, null],
      ]);
      const momentExpected = moment("01/01/2020", defaultDateFormat);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(momentExpected.toISOString());
      expect(result[1]).toBe(null);
    });
    it("should return to value and from value as null if we only pass to", () => {
      const result = getMomentDateValue([
        [null, "01/01/2020"],
        [null, null],
      ]);
      const momentExpected = moment("01/01/2020", defaultDateFormat);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(momentExpected.toISOString());
      expect(result[0]).toBe(null);
    });
    it("should return to and from value if we pass both", () => {
      const result = getMomentDateValue([
        ["01/01/2020", "01/12/2020"],
        [null, null],
      ]);
      const momentExpected1 = moment("01/01/2020", defaultDateFormat);
      const momentExpected2 = moment("01/12/2020", defaultDateFormat);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(momentExpected1.toISOString());
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(momentExpected2.toISOString());
    });
    it("should return null array if we pass both null", () => {
      const result = getMomentDateValue([
        [null, null],
        [null, null],
      ]);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeNull();
      expect(result[1]).toBeNull();
    });
  });
  describe("in getMomentTimeValue method", () => {
    it("should return array of null if value is undefined", () => {
      const result = getMomentTimeValue(undefined);
      expect(result[0]).toBe(null);
      expect(result[1]).toBe(null);
    });
    it("should return from value and to value as null if we only pass from", () => {
      const result = getMomentTimeValue([
        [null, null],
        ["00:00", null],
      ]);
      const momentExpected = moment(
        defaultDateForTimeValue + " " + "00:00",
        defaultDateFormat + " " + defaultTimeFormat
      );
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(momentExpected.toISOString());
      expect(result[1]).toBe(null);
    });
    it("should return to value and from value as null if we only pass to", () => {
      const result = getMomentTimeValue([
        [null, null],
        [null, "03:15"],
      ]);
      const momentExpected = moment(
        defaultDateForTimeValue + " " + "03:15",
        defaultDateFormat + " " + defaultTimeFormat
      );
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(momentExpected.toISOString());
      expect(result[0]).toBe(null);
    });
    it("should return to and from value if we pass both", () => {
      const result = getMomentTimeValue([
        [null, null],
        ["01:39", "03:15"],
      ]);
      const momentExpected1 = moment(
        defaultDateForTimeValue + " " + "01:39",
        defaultDateFormat + " " + defaultTimeFormat
      );

      const momentExpected2 = moment(
        defaultDateForTimeValue + " " + "03:15",
        defaultDateFormat + " " + defaultTimeFormat
      );
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeDefined();
      expect(result[0].toISOString()).toBe(momentExpected1.toISOString());
      expect(result[1]).toBeDefined();
      expect(result[1].toISOString()).toBe(momentExpected2.toISOString());
    });
    it("should return null array if we pass both null", () => {
      const result = getMomentTimeValue([
        [null, null],
        [null, null],
      ]);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeNull();
      expect(result[1]).toBeNull();
    });
  });
  describe("in convertMomentDateArrayToStringArray method", () => {
    it("should return array of nulls if value is undefined", () => {
      const result = convertMomentDateArrayToStringArray(undefined);
      expect(result[0]).toBe(null);
      expect(result[1]).toBe(null);
    });
    it("should return from value and to value as null if we only pass from", () => {
      const fromDate = "01/04/2018";
      const fromDateMoment = moment(fromDate, defaultDateFormat);

      const result = convertMomentDateArrayToStringArray([
        fromDateMoment,
        null,
      ]);
      expect(result[0]).toBe(fromDate);
      expect(result[1]).toBe(null);
    });
    it("should return to value and from value as null if we only pass to", () => {
      const toDate = "01/04/2018";
      const toDateMoment = moment(toDate, defaultDateFormat);

      const result = convertMomentDateArrayToStringArray([null, toDateMoment]);
      expect(result[1]).toBe(toDate);
      expect(result[0]).toBe(null);
    });

    it("should return array of both formatted values if we pass two valid moments", () => {
      const fromDate = "01/04/2018";
      const toDate = "23/06/2021";
      const fromDateMoment = moment(fromDate, defaultDateFormat);
      const toDateMoment = moment(toDate, defaultDateFormat);

      const result = convertMomentDateArrayToStringArray([
        fromDateMoment,
        toDateMoment,
      ]);
      expect(result[0]).toBe(fromDate);
      expect(result[1]).toBe(toDate);
    });
    it("should return null array if we pass both null", () => {
      const result = convertMomentDateArrayToStringArray([null, null]);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeNull();
      expect(result[1]).toBeNull();
    });
  });
  describe("in convertMomentTimeArrayToStringArray method", () => {
    it("should return array of nulls if value is undefined", () => {
      const result = convertMomentTimeArrayToStringArray(undefined);
      expect(result[0]).toBe(null);
      expect(result[1]).toBe(null);
    });
    it("should return from value and to value as null if we only pass from", () => {
      const time = "10:01";
      const fromDate = defaultDateForTimeValue + " " + time;
      const fromDateMoment = moment(fromDate, `${defaultDateFormat} ${defaultTimeFormat}`);

      const result = convertMomentTimeArrayToStringArray([
        fromDateMoment,
        null,
      ]);
      expect(result[0]).toBe(time);
      expect(result[1]).toBe(null);
    });
    it("should return to value and from value as null if we only pass to", () => {
      const time = "10:01";
      const fromDate = defaultDateForTimeValue + " " + time;
      const toDateMoment = moment(fromDate, `${defaultDateFormat} ${defaultTimeFormat}`);

      const result = convertMomentTimeArrayToStringArray([null, toDateMoment]);
      expect(result[1]).toBe(time);
      expect(result[0]).toBe(null);
    });

    it("should return array of both formatted values if we pass two valid moments", () => {
      const timeFrom = "10:01";
      const timeTo = "23:59";
      const fromDate = defaultDateForTimeValue + " " + timeFrom;
      const toDate = defaultDateForTimeValue + " " + timeTo;
      const fromDateMoment = moment(fromDate, `${defaultDateFormat} ${defaultTimeFormat}`);
      const toDateMoment = moment(toDate, `${defaultDateFormat} ${defaultTimeFormat}`);

      const result = convertMomentTimeArrayToStringArray([
        fromDateMoment,
        toDateMoment,
      ]);
      expect(result[0]).toBe(timeFrom);
      expect(result[1]).toBe(timeTo);
    });
    it("should return null array if we pass both null", () => {
      const result = convertMomentTimeArrayToStringArray([null, null]);
      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toBe(2);
      expect(result[0]).toBeNull();
      expect(result[1]).toBeNull();
    });
  });
});
