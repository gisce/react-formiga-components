import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { One2ManyInput } from "./One2ManyInput";
import { BaseFieldArgTypes } from "@/components/form/Field/BaseField.argTypes";
import { O2MViewMode, One2ManyItem } from "./One2ManyInput.types";
import { Modal } from "antd";

export default {
  title: "Components/Widgets/One2Many/One2ManyInput",
  component: One2ManyInput,
  argTypes: {
    ...BaseFieldArgTypes,
  },
} as ComponentMeta<typeof One2ManyInput>;

const Template: ComponentStory<typeof One2ManyInput> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <One2ManyInput
      {...args}
      value={value}
      onChange={(value: One2ManyItem[]) => {
        setValue(value);
        args.onChange?.(value);
      }}
      viewModes={["tree", "form"]}
      initialViewMode="form"
      onChangeViewMode={async (mode: O2MViewMode) => {
        console.log(mode);
      }}
      onRenderMode={(mode: string) => {
        console.log("onRenderMode", mode);
        return <div>onRenderMode {mode}</div>;
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  required: false,
  readOnly: false,
  locale: "en_US",
};
