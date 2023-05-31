import React, { useRef } from "react";
import { Col, DatePicker, Row, TimePicker } from "antd";
import { Dayjs } from "dayjs";
import { defaultDateFormat } from "../DateSearch/DateSearch.types";
import { DateTimeSearchProps, defaultTimeFormat } from "./DateTimeSearch.types";
import {
  convertMomentDateArrayToStringArray,
  convertMomentTimeArrayToStringArray,
  getMomentDateValue,
  getMomentTimeValue,
} from "./DateTimeSearch.helper";

export const DateTimeSearch = (props: DateTimeSearchProps) => {
  const { value, onChange } = props;

  const dateRef = useRef<[string, string]>([null, null]);
  const timeRef = useRef<[string, string]>([null, null]);

  const momentDateValue = getMomentDateValue(value);
  const momentTimeValue = getMomentTimeValue(value);

  return (
    <Row align={"bottom"} style={{ padding: 0 }}>
      <Col style={{ marginRight: 2 }}>
        <DatePicker.RangePicker
          style={{ width: "15rem" }}
          allowEmpty={[true, true]}
          format={defaultDateFormat}
          value={momentDateValue as any}
          onChange={(momentValues: Dayjs[]) => {
            dateRef.current = convertMomentDateArrayToStringArray(
              momentValues
            ) as [string, string];
            onChange([dateRef.current, timeRef.current]);
          }}
        ></DatePicker.RangePicker>
      </Col>
      <Col>
        <TimePicker.RangePicker
          style={{ width: "15rem" }}
          allowEmpty={[true, true]}
          format={defaultTimeFormat}
          value={momentTimeValue as any}
          onChange={(momentValues: Dayjs[]) => {
            timeRef.current = convertMomentTimeArrayToStringArray(
              momentValues
            ) as [string, string];
            onChange([dateRef.current, timeRef.current]);
          }}
        ></TimePicker.RangePicker>
      </Col>
    </Row>
  );
};
