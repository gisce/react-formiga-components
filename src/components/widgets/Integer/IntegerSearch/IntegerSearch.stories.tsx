import React, { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IntegerSearch } from ".";

export default {
  title: "Components/Widgets/Integer/IntegerSearch",
  component: IntegerSearch,
} as ComponentMeta<typeof IntegerSearch>;

const Template: ComponentStory<typeof IntegerSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <IntegerSearch
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
  value: [3, 10],
};
