import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DateSearch } from ".";

const category = "Date specific";

export default {
  title: "Components/Widgets/Date/DateSearch",
  component: DateSearch,
  argTypes: {
    onChange: {
      action: "onChange",
      table: {
        category,
      },
    },
    value: {
      table: {
        category,
      },
    },
  },
} as ComponentMeta<typeof DateSearch>;

const Template: ComponentStory<typeof DateSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <DateSearch
      {...args}
      value={value}
      onChange={(value: [string, string]) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const BasicWithValues = Template.bind({});
BasicWithValues.args = { value: ["2020-01-01", "2020-12-01"] };
