import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharInput } from "@/components/widgets/Char/CharInput";
import { Field, FieldProps } from "@/components/form/Field";
import { BaseFieldArgTypes } from "./BaseField.argTypes";
import { Form } from "antd";

const category = "Field";

const labelOptions = [
  "* **`text`**: `string`. Text to show inside the label",
  "* **`tooltip`**: `string`. Description of the tooltip. Hidden by default",
  "* **`layout`**: `vertical` | `horizontal`. Show label and field inline (horizontal) or vertically separated. Default `horizontal`",
  "* **`alignLabel`**: `left` | `center` | `right`. Only applies when field is in vertical mode. Alignment of the label. Default `horizontal`",
];

const validatorOptions = [
  "* **`type`**: `string | number | array | ...`. Primitive type of the field. More type to ref [here](https://github.com/yiminghe/async-validator#type).",
  "* **`validator`**: `(value: any) => Promise<void | any> | void>`. Function that receives the value and throw error if validation doesn't pass",
];

export default {
  title: "Work in progress/Form/Field",
  component: CharInput,
  argTypes: {
    ...BaseFieldArgTypes,
    name: {
      description:
        "Name or unique key of the field for referencing it while inside a form",
      table: {
        category,
      },
    },
    valuePropName: {
      description:
        "Props of children node, for example, the prop of a Checkbox is 'checked'",
      table: { defaultValue: { summary: "value" }, category },
    },
    labelOpts: {
      description: labelOptions.join("\n"),
      table: { category },
    },
    validatorOpts: {
      description: validatorOptions.join("\n"),
      table: { category },
    },
    isPassword: { table: { disable: true } },
  },
} as ComponentMeta<typeof CharInput>;

const Template: ComponentStory<typeof Field> = (args) => (
  <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>
);

export const Basic = Template.bind({});
Basic.args = {
  name: "field_id",
  required: false,
  readOnly: false,
} as FieldProps;

export const BasicWithLabel = Template.bind({});
BasicWithLabel.args = {
  name: "field_id",
  labelOpts: {
    text: "Example form field",
  },
  required: false,
  readOnly: false,
} as FieldProps;

export const BasicWithLabelAndTooltip = Template.bind({});
BasicWithLabelAndTooltip.args = {
  name: "field_id",
  labelOpts: {
    text: "Example form field",
    tooltip: "Tooltip value",
  },
  required: false,
  readOnly: false,
} as FieldProps;

export const BasicWithLabelVerticalLeft = Template.bind({});
BasicWithLabelVerticalLeft.args = {
  name: "field_id",
  labelOpts: {
    text: "Example form field",
    layout: "vertical",
    align: "left",
  },
  required: false,
  readOnly: false,
} as FieldProps;

export const BasicWithLabelVerticalCenter = Template.bind({});
BasicWithLabelVerticalCenter.args = {
  name: "field_id",
  labelOpts: {
    text: "Example form field",
    layout: "vertical",
    align: "center",
  },
  required: false,
  readOnly: false,
} as FieldProps;

export const BasicWithLabelVerticalRight = Template.bind({});
BasicWithLabelVerticalRight.args = {
  name: "field_id",
  labelOpts: {
    text: "Example form field",
    layout: "vertical",
    align: "right",
  },
  required: false,
  readOnly: false,
} as FieldProps;
