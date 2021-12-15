import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UrlInput } from ".";
import { BaseFieldArgTypes } from "components/form/Field/BaseField.argTypes";

export default {
  title: "Components/Widgets/Link/UrlInput",
  component: UrlInput,
  argTypes: {
    ...BaseFieldArgTypes,
    locale: { table: { disable: true } },
  },
} as ComponentMeta<typeof UrlInput>;

const Template: ComponentStory<typeof UrlInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <UrlInput
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
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  readOnly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  required: false,
  readOnly: true,
  value: "https://www.gisce.dev",
};

export const WithValue = Template.bind({});
WithValue.args = {
  required: false,
  readOnly: false,
  value: "https://www.gisce.dev",
};

export const WithWrongValue = Template.bind({});
WithWrongValue.args = {
  required: false,
  readOnly: false,
  value: "random",
};

export const WithWrongValueAndReadOnly = Template.bind({});
WithWrongValueAndReadOnly.args = {
  required: false,
  readOnly: true,
  value: "random",
};
