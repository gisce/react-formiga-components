import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BooleanSearch } from "./BooleanSearch";
import { LocaleArgTypes } from "components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Boolean/BooleanSearch",
  component: BooleanSearch,
  argTypes: {
    ...LocaleArgTypes,
  },
} as ComponentMeta<typeof BooleanSearch>;

const Template: ComponentStory<typeof BooleanSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <BooleanSearch
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
  value: "true",
};
