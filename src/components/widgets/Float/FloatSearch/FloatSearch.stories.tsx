import React, { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatSearch } from ".";

export default {
  title: "Work in progress/Widgets/Float/FloatSearch",
  component: FloatSearch,
} as ComponentMeta<typeof FloatSearch>;

const Template: ComponentStory<typeof FloatSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <FloatSearch
      {...args}
      value={value}
      onChange={(value: [number, number]) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  decimalDigits: 2,
  value: [3.3, 10.09],
};
