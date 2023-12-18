// @TODO: Review this component
// @ts-nocheck
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Input, Button, Row, Col } from "antd";

import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { LinkInputProps } from "./LinkInput.types";
import { RequiredInput } from "./LinkInput.styles";

export const LinkInput = (props: LinkInputProps) => {
  const {
    readOnly,
    required,
    value,
    onChange,
    valueValidator,
    linkPrefix = "",
  } = props;

  const InputComponent = required && !readOnly ? RequiredInput : Input;

  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (readOnly && !editMode) {
      setShowInput(false);
    }

    if (!value && !readOnly) {
      setEditMode(true);
      setShowInput(true);
    }
  }, [editMode, readOnly]);

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Row gutter={8} wrap={false} align="middle">
      {!readOnly ? (
        <Col flex="32px">
          {editMode ? (
            <Button
              icon={<CheckOutlined />}
              onClick={() => {
                if (valueValidator?.(value)) {
                  setEditMode(false);
                  setShowInput(false);
                }
              }}
              tabIndex={-1}
            />
          ) : (
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setEditMode(true);
                setShowInput(true);
              }}
              tabIndex={-1}
            />
          )}
        </Col>
      ) : null}
      <Col flex="auto">
        {showInput || (value && !valueValidator(value) && !readOnly) ? (
          <InputComponent
            onChange={onValueStringChange}
            value={value}
            onBlur={() => {
              if (valueValidator(value)) {
                setEditMode(false);
                setShowInput(false);
              }
            }}
          />
        ) : value && !valueValidator(value) ? (
          <>{value}</>
        ) : (
          <a
            href={`${linkPrefix}${value}`}
            style={{ color: "#1890ff", paddingLeft: 10, paddingRight: 15 }}
            target="_blank"
          >
            {value}
          </a>
        )}
      </Col>
    </Row>
  );
};
