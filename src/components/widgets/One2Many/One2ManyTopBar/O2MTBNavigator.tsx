import React from "react";
import { Button } from "@/components/ui/Button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Locale, tForLang } from "@/context";

export type O2MTBNavigatorProps = {
  totalItems: number;
  currentItemIndex: number;
  onPreviousItem: () => void;
  onNextItem: () => void;
  locale: Locale;
};

export const O2MTBNavigator = (props: O2MTBNavigatorProps) => {
  const { totalItems, currentItemIndex, onNextItem, onPreviousItem, locale } =
    props;

  let itemToShow = "_";
  if (totalItems === 0) {
    itemToShow = "_";
  } else {
    itemToShow = (currentItemIndex + 1).toString();
  }

  return (
    <>
      <Button
        tooltip={tForLang("previous", locale)}
        icon={<LeftOutlined />}
        onClick={onPreviousItem}
      />
      <span style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}>
        ({itemToShow}/{totalItems})
      </span>
      <Button
        tooltip={tForLang("next", locale)}
        icon={<RightOutlined />}
        onClick={onNextItem}
      />
    </>
  );
};
