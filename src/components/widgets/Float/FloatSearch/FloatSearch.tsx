import React from "react";
import { Row, Col } from "antd";
import { FloatInput } from "../index";
import { FloatSearchProps } from "./FloatSearch.types";

export const FloatSearch = (props: FloatSearchProps) => {
  const { value = [0, 0], onChange, ...restProps } = props;

  return (
    <Row align={"bottom"} className="mt-0" wrap={false}>
      <Col>
        <FloatInput
          value={value[0]}
          onChange={(newValue: number) => {
            onChange([newValue, value[1]]);
          }}
          {...restProps}
        />
      </Col>
      <Col className="pb-1">
        <span className="pl-2 pr-2 h-full"> - </span>
      </Col>
      <Col>
        <FloatInput
          value={value[1]}
          onChange={(newValue: number) => {
            onChange([value[0], newValue]);
          }}
          {...restProps}
        />
      </Col>
    </Row>
  );
};
