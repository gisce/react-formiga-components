import { Col, Input, Row } from "antd";
import React from "react";
import { TranslationOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { ThemeConfig } from "@/theme";
import { TranslatableInputProps } from "./TranslatableInput.types";
import { ButtonWithTooltip } from "@/components/ui/Button/ButtonWithTooltip";
import { TranslatableModal } from "../TranslatableModal";

export const TranslatableInput = (props: TranslatableInputProps) => {
  const {
    name,
    readOnly,
    required,
    onBlur,
    tabIndex,
    value,
    onChange,
    locale,
    modalVisible,
    modalOpts,
    onClick,
    showButton,
    ...rest
  } = props;

  const requiredClass =
    required && !readOnly ? ThemeConfig.requiredClass : undefined;

  const inputProps = {
    value,
    id: name,
    className: requiredClass,
    onChange: (event: any) => {
      onChange?.(event.target.value);
    },
    onBlur: onBlur,
    tabIndex,
  };

  if (showButton) {
    return (
      <Row gutter={8} wrap={false}>
        <Col flex="auto">
          <Input {...inputProps} />
        </Col>
        <Col flex="32px">
          <ButtonWithTooltip
            tooltip={tForLang("translate", locale)}
            icon={<TranslationOutlined />}
            onClick={onClick}
          >
            {tForLang("translate", locale)}
          </ButtonWithTooltip>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <div onClick={onClick}>
        <Input {...inputProps} disabled={true} style={{ cursor: "pointer" }} />
      </div>
      <TranslatableModal
        name={name}
        visible={modalVisible}
        {...modalOpts}
        {...rest}
      />
    </>
  );
};
