import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Many2OneInput } from "./Many2OneInput";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";
import { ItemPair } from "./Many2OneInput.types";
import { Modal } from "antd";
const { info } = Modal;

export default {
  title: "Components/Widgets/Many2One/Many2OneInput",
  component: Many2OneInput,
  argTypes: {
    ...BaseFieldArgTypes,
  },
} as ComponentMeta<typeof Many2OneInput>;

const Template: ComponentStory<typeof Many2OneInput> = (args) => {
  const [value, setValue] = useState(args.value);
  const [searching, setSearching] = useState(args.searching);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Many2OneInput
      {...args}
      searching={searching}
      value={value}
      onChange={(value: ItemPair) => {
        setValue(value);
        args.onChange?.(value);
      }}
      onSearchForResult={async (value: string) => {
        action("onSearchForResult")(value);
        setSearching(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setValue({ id: 43, name: "Company found nº 312" });
        setSearching(false);
      }}
      onShowResultDetails={(item: ItemPair) => {
        action("onShowResultDetails")(item);
        info({
          title: "Item details",
          centered: true,
          content: <>{JSON.stringify(item, null, 2)}</>,
        });
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  value: {
    id: 58,
    name: "Test",
  },
  searching: false,
};

const NotFound: ComponentStory<typeof Many2OneInput> = (args) => {
  const [value, setValue] = useState(args.value);
  const [searching, setSearching] = useState(args.searching);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Many2OneInput
      {...args}
      searching={searching}
      value={value}
      onChange={(value: ItemPair) => {
        setValue(value);
        args.onChange?.(value);
      }}
      onSearchForResult={async (value: string) => {
        action("onSearchForResult")(value);
        setSearching(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setValue({ id: undefined, name: value });
        setSearching(false);
      }}
      onShowResultDetails={(item: ItemPair) => {
        action("onShowResultDetails")(item);
        info({
          title: "Item details",
          centered: true,
          content: <>{JSON.stringify(item, null, 2)}</>,
        });
      }}
    />
  );
};

export const NotFoundResult = NotFound.bind({});
NotFoundResult.args = {
  required: false,
  readOnly: false,
  searching: false,
};
