import React from "react";
import { Row, Col } from "antd";
import { IntegerInput } from "../index";
import { IntegerSearchProps } from "./IntegerSearch.types";

export const IntegerSearch = (props: IntegerSearchProps) => {
  const { value = [0, 0], onChange, ...rest } = props;

  return (
    <Row align={"bottom"} className="mt-0" wrap={false}>
      <Col>
        <IntegerInput
          {...rest}
          value={value[0]}
          onChange={(newValue: number) => {
            onChange([newValue, value[1]]);
          }}
        />
      </Col>
      <Col className="pb-1">
        <span className="pl-2 pr-2 h-full"> - </span>
      </Col>
      <Col>
        <IntegerInput
          {...rest}
          value={value[1]}
          onChange={(newValue: number) => {
            onChange([value[0], newValue]);
          }}
        />
      </Col>
    </Row>
  );
};
