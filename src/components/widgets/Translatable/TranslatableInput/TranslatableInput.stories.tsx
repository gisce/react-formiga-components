import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TranslatableInput } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Work in progress/Widgets/Translatable/TranslatableInput",
  component: TranslatableInput,
  argTypes: {
    ...BaseFieldArgTypes,
    isPassword: {
      description: "The input is a password",
      table: { defaultValue: { summary: false }, category: "Char specific" },
    },
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof TranslatableInput>;

const Template: ComponentStory<typeof TranslatableInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <TranslatableInput
      {...args}
      value={value}
      onChange={(value: string) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const WithButton = Template.bind({});
WithButton.args = {
  required: false,
  readOnly: false,
  showButton: true,
  locale: "ca_ES",
};

export const Default: ComponentStory<typeof TranslatableInput> = (args) => {
  const [value, setValue] = useState("Initial translated text");

  return (
    <TranslatableInput
      name={"translatable_field"}
      value={value}
      onChange={(value: string) => {
        setValue(value);
        args.onChange?.(value);
      }}
      locale="en_US"
      modalOpts={{
        model: "company",
        id: 37,
      }}
      onGetLangs={async () => {
        return [
          { code: "en_US", name: "English" },
          { code: "ca_ES", name: "Catalan" },
        ];
      }}
      onGetValuesForLangs={async (opts) => {
        const { model, id, name, langs } = opts;
        return {
          en_US: "Translated text",
          ca_ES: "Text traduït",
        };
      }}
      onSucceed={() => {}}
      onError={(error) => {
        alert(JSON.stringify(error));
      }}
      onUpdateValues={async (opts) => {}}
    />
  );
};
