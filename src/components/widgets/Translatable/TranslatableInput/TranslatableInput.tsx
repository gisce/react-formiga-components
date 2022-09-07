import { Col, Input, Row } from "antd";
import React, { useState, useCallback } from "react";
import { TranslationOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";
import { ThemeConfig } from "@/theme";
import { TranslatableInputProps } from "./TranslatableInput.types";
import { ButtonWithTooltip } from "@/components/ui/Button/ButtonWithTooltip";
import { TranslatableModal } from "../TranslatableModal";
import { showInfoDialog } from "@/components/ui/Dialog";

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
    modalOpts,
    showButton,
    mustSaveBeforeTranslate,
    ...rest
  } = props;

  const requiredClass =
    required && !readOnly ? ThemeConfig.requiredClass : undefined;
  const [modalVisible, setModalVisible] = useState(false);

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

  const buttonOnClick = useCallback(() => {
    if (mustSaveBeforeTranslate) {
      showInfoDialog(tForLang("saveBeforeTranslate", locale));
    } else {
      showInfoDialog(tForLang("enterTextBeforeTranslate", locale));
    }
  }, [locale, mustSaveBeforeTranslate]);

  const onClick = useCallback(() => {
    if (mustSaveBeforeTranslate) {
      showInfoDialog(tForLang("saveBeforeTranslate", locale));
      return;
    }

    if (!modalVisible) {
      setModalVisible(true);
    }
  }, [locale, mustSaveBeforeTranslate, modalVisible, setModalVisible]);

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
            onClick={buttonOnClick}
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
        onClose={() => setModalVisible(false)}
        onSucceed={() => setModalVisible(false)}
        {...modalOpts}
        {...rest}
      />
    </>
  );
};
