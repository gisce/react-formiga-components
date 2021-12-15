import React, { useEffect, useRef, useState } from "react";
import { Many2OneDummy } from "../Many2OneDummy";
import { ItemPair, Many2OneInputProps } from "./Many2OneInput.types";

export const Many2OneInput = (props: Many2OneInputProps) => {
  const {
    value,
    onChange,
    onSearchForResult,
    onShowResultDetails,
    searching = false,
    ...restProps
  } = props;

  const item: ItemPair = value
    ? {
        id: value.id || undefined,
        name: value.name || undefined,
      }
    : {
        id: undefined,
        name: "",
      };

  const inputTextRef = useRef<string>(item.name);

  useEffect(() => {
    inputTextRef.current = (value && value.name) || "";
  }, [value]);

  return (
    <Many2OneDummy
      {...restProps}
      searching={searching}
      value={inputTextRef.current}
      textColor={item.id !== undefined ? "blue" : "black"}
      onChange={(name: string) => {
        inputTextRef.current = name;
        onChange({ id: undefined, name });
      }}
      disableFolderButton={!(item && item.id !== undefined)}
      disableSearchButton={searching}
      onClickFolderButton={() => {
        onShowResultDetails(item);
      }}
      onClickSearchButton={() => {
        onSearchForResult(inputTextRef.current);
      }}
      onEnterPressed={() => {
        if (item.id !== undefined || searching) {
          return;
        }
        onSearchForResult(inputTextRef.current);
      }}
      onElementLostFocus={() => {
        if (item.id !== undefined || searching) {
          return;
        }
        onSearchForResult(inputTextRef.current);
      }}
    />
  );
};
