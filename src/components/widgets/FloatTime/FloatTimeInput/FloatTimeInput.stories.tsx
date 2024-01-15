import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatTimeInput } from ".";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Work in progress/Widgets/FloatTime/FloatTimeInput",
  component: FloatTimeInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof FloatTimeInput>;

const Template: ComponentStory<typeof FloatTimeInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <FloatTimeInput
      {...args}
      value={value}
      onChange={(value: number) => {
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
};

export const WithValue = Template.bind({});
WithValue.args = {
  required: false,
  readOnly: false,
  value: 2.5,
};
