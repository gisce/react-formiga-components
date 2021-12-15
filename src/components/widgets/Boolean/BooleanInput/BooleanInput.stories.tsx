import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BooleanInput } from "./BooleanInput";
import { BaseFieldArgTypes } from "components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Boolean/BooleanInput",
  component: BooleanInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof BooleanInput>;

const Template: ComponentStory<typeof BooleanInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <BooleanInput
      {...args}
      value={value}
      onChange={(value: boolean) => {
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
  value: false,
};
