import React, { useEffect, useRef, useState } from "react";
import { Modal, Divider, Row, Spin, Col } from "antd";
import { tForLang } from "@/context/LocaleContext";
import TextArea from "antd/lib/input/TextArea";
import {
  Lang,
  TranslatableModalProps,
  ValuesForLangs,
} from "./TranslatableModal.types";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { ModalBottomBar } from "@/components/ui/ModalBottomBar/ModalBottomBar";

export const TranslatableModal = (props: TranslatableModalProps) => {
  const {
    locale,
    visible,
    onClose,
    model,
    id,
    name,
    onSucceed,
    onError,
    onGetLangs,
    onGetValuesForLangs,
    onUpdateValues,
  } = props;

  const { modalWidth } = useWindowDimensions();

  const [langs, setLangs] = useState<Lang[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [valuesForLangs, setValuesForLangs] = useState<ValuesForLangs>({});

  const originalValuesForLangs = useRef<ValuesForLangs>();

  useEffect(() => {
    if (visible) {
      fetchData();
    } else {
      setValuesForLangs({});
    }
  }, [visible]);

  async function fetchData() {
    setIsLoading(true);

    try {
      const langs = await onGetLangs();
      setLangs?.(langs);
      await getValuesForLangs(langs);
    } catch (err) {
      onError(err);
    }

    setIsLoading(false);
  }

  async function getValuesForLangs(langs: Lang[]) {
    try {
      const retrievedValuesForLang: ValuesForLangs = await onGetValuesForLangs({
        langs,
        model,
        id,
        name,
      });

      originalValuesForLangs.current = retrievedValuesForLang;
      setValuesForLangs(retrievedValuesForLang);
    } catch (err) {
      onError(err);
    }
  }

  function getInputsForLangs() {
    return langs.map((lang: Lang, i: number) => {
      return (
        <Row key={i} style={{ paddingBottom: 20 }}>
          <Col flex="8rem" style={{ paddingRight: 10 }}>
            {lang.name}
          </Col>
          <Col flex="auto">
            <TextArea
              rows={4}
              value={valuesForLangs[lang.code] || ""}
              onChange={(event: any) => {
                setValuesForLangs({
                  ...valuesForLangs,
                  [lang.code]: event.target.value,
                });
              }}
              disabled={submitLoading}
            />
          </Col>
        </Row>
      );
    });
  }

  async function onSubmit() {
    setSubmitLoading(true);

    try {
      for (const langCode of Object.keys(valuesForLangs)) {
        if (
          valuesForLangs[langCode] !== originalValuesForLangs.current![langCode]
        ) {
          await onUpdateValues({
            model,
            id,
            name,
            langCode,
            values: valuesForLangs[langCode],
          });
        }
      }
    } catch (err) {
      onError(err);
    }

    setSubmitLoading(false);
    onSucceed();
  }

  function content() {
    if (isLoading) {
      return <Spin />;
    }

    return (
      <>
        {getInputsForLangs()}
        <Divider />
        <ModalBottomBar
          locale={locale}
          onClose={onClose}
          onConfirm={onSubmit}
          loading={submitLoading}
        />
      </>
    );
  }

  return (
    <Modal
      title={tForLang("translate", locale)}
      centered
      width={modalWidth}
      visible={visible}
      closable={true}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      {content()}
    </Modal>
  );
};
