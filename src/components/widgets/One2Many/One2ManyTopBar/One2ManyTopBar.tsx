import React from "react";
import { AlignLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/Button";
import { tForLang } from "@/context/LocaleContext";
import { Container, Title, Wrapper } from "./One2ManyTopBar.styles";
import { One2manyTopBarProps } from "./One2ManyTopBar.types";
import { O2MTBButtons } from "./O2MTBButtons";

export const One2ManyTopBar = (props: One2manyTopBarProps) => {
  const {
    title,
    locale,
    onChangeViewMode,
    viewModes,
    currentViewMode,
    buttonOpts,
  } = props;

  return (
    <Container>
      <Title title={title} />
      <Wrapper>
        <O2MTBButtons locale={locale} buttonOpts={buttonOpts} />
        <Button
          tooltip={tForLang("toggleViewMode", locale)}
          disabled={buttonOpts?.toggleViewMode?.loading}
          icon={
            buttonOpts?.toggleViewMode?.loading ? (
              <LoadingOutlined />
            ) : (
              <AlignLeftOutlined />
            )
          }
          onClick={() => {
            const nextViewMode = getNextValue({
              current: currentViewMode,
              array: viewModes,
            });
            onChangeViewMode(nextViewMode);
          }}
        />
      </Wrapper>
    </Container>
  );
};

function getNextValue({
  current,
  array,
}: {
  current: string;
  array: string[];
}): string | null {
  const currentIndex = array.indexOf(current);
  if (currentIndex === -1 || currentIndex === array.length - 1) {
    return array[0];
  }
  return array[currentIndex + 1];
}
