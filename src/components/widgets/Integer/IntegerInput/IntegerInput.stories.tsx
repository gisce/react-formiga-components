import React, { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IntegerInput } from "./IntegerInput";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Integer/IntegerInput",
  component: IntegerInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof IntegerInput>;

const Template: ComponentStory<typeof IntegerInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <IntegerInput
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
  value: 2,
};
