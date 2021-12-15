import React, { useContext } from "react";
import { Col } from "antd";
import { Rule } from "antd/lib/form";

import { Label } from "components/ui/Label/Label";
import {
  LocaleContext,
  LocaleContextType,
  tForLangContext,
} from "context/LocaleContext";
import { FieldProps } from "./Field.types";
import {
  FormItemStyled,
  LabelContainer,
  StyledCol,
  StyledRow,
} from "./Field.styles";

export function Field(props: FieldProps) {
  const {
    name,
    labelOpts,
    children,
    valuePropName,
    required = false,
    validatorOpts,
    locale,
  } = props;

  const { t: tContext = undefined } =
    (useContext(LocaleContext) as LocaleContextType) || {};
  function t(key: string) {
    return tForLangContext(key, locale, tContext);
  }

  let rules: Rule[];
  if (validatorOpts && required) {
    const { type, validator } = validatorOpts;
    rules = [
      {
        required: true,
        message: t("fillRequiredField"),
        type,
        validator: validator
          ? (_: any, value: any) => {
              validator(value);
            }
          : undefined,
      },
    ];
  }

  function formItem() {
    return (
      <FormItemStyled name={name} valuePropName={valuePropName} rules={rules}>
        {children}
      </FormItemStyled>
    );
  }

  if (!labelOpts) {
    return formItem();
  }

  const { tooltip, layout = "horizontal", align = "left", text } = labelOpts;

  function labelWidget() {
    return <Label text={`${text} :`} tooltip={tooltip} align={align} />;
  }

  function horizontalMode() {
    return (
      <StyledRow align="middle">
        <StyledCol flex="7rem">
          <LabelContainer>{labelWidget()}</LabelContainer>
        </StyledCol>
        <Col flex="auto">{formItem()}</Col>
      </StyledRow>
    );
  }

  const verticalMode = () => {
    return (
      <>
        {labelWidget()}
        {formItem()}
      </>
    );
  };

  return layout === "horizontal" ? horizontalMode() : verticalMode();
}
