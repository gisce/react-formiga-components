import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectionInput } from "./SelectionInput";
import { BaseFieldArgTypes } from "components/form/Field/BaseField.argTypes";

const selectionValues = {
  "1": "One",
  "2": "Two",
  "3": "Three",
};

export default {
  title: "Components/Widgets/Selection/SelectionInput",
  component: SelectionInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof SelectionInput>;

const Template: ComponentStory<typeof SelectionInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <SelectionInput
      {...args}
      value={value}
      onChange={(value: string) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  selectionValues,
  value: "2",
};
