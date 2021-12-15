import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DateTimeSearch } from ".";

const category = "Date specific";

export default {
  title: "Components/Widgets/Date/DateTimeSearch",
  component: DateTimeSearch,
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
} as ComponentMeta<typeof DateTimeSearch>;

const Template: ComponentStory<typeof DateTimeSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <DateTimeSearch
      {...args}
      value={value}
      onChange={(value: [[string, string], [string, string]]) => {
        setValue(value);
        args.onChange?.(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

// export const BasicWithValues = Template.bind({});
// BasicWithValues.args = { value: ["2020-01-01", "2020-12-01"] };
