import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  CharInput,
  BooleanInput,
  Field,
  Form,
  FileInput,
  ImageInput,
  DateInput,
  TextInput,
  IntegerInput,
  FloatInput,
  SelectionInput,
} from "@/index";
import { useForm } from "antd/es/form/Form";

export default {
  title: "Components/Form/Form",
  component: Form,
  argTypes: {
    children: { table: { disable: true }, control: { disable: true } },
    onFieldsChange: { control: { disable: true } },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const [antForm] = useForm();
  return <Form {...args} form={antForm} initialValues={{ name: "Hohn" }} />;
};

const formItems = [
  {
    type: CharInput,
    baseProps: {
      required: true,
    },
    fieldProps: {
      name: "name",
      labelOpts: { text: "Name" },
    },
    widgetProps: {},
  },
  {
    type: CharInput,
    baseProps: {
      required: true,
    },
    fieldProps: {
      name: "surnames",
      labelOpts: { text: "Surnames" },
    },
    widgetProps: {},
  },
  {
    type: CharInput,
    baseProps: {
      required: true,
    },
    fieldProps: {
      name: "password",
      labelOpts: { text: "Password" },
    },
    widgetProps: { isPassword: true },
  },
  {
    type: CharInput,
    baseProps: {
      required: true,
    },
    fieldProps: {
      name: "repeat_password",
      labelOpts: { text: "Repeat password" },
    },
    widgetProps: { isPassword: true },
  },
  {
    type: BooleanInput,
    baseProps: {},
    fieldProps: {
      name: "subscribe_to_newsletter",
      labelOpts: { text: "Receive news" },
    },
    widgetProps: {},
  },
  {
    type: FileInput,
    baseProps: {},
    fieldProps: {
      name: "cv",
      labelOpts: { text: "Resume" },
    },
    widgetProps: {},
  },
  {
    type: ImageInput,
    baseProps: {},
    fieldProps: {
      name: "profile_image",
      labelOpts: { text: "Profile image" },
    },
    widgetProps: {},
  },
  {
    type: DateInput,
    baseProps: {},
    fieldProps: {
      name: "birthdate",
      labelOpts: { text: "Birth date" },
    },
    widgetProps: {},
  },
  {
    type: TextInput,
    baseProps: {},
    fieldProps: {
      name: "notes",
      labelOpts: { text: "Additional notes" },
    },
    widgetProps: {},
  },
  {
    type: IntegerInput,
    baseProps: {},
    fieldProps: {
      name: "years_of_experience",
      labelOpts: { text: "Years of experience" },
    },
    widgetProps: {},
  },
  {
    type: FloatInput,
    baseProps: {},
    fieldProps: {
      name: "expected_salary",
      labelOpts: { text: "Expected salary (USD)" },
    },
    widgetProps: { decimalDigits: 2 },
  },
  {
    type: DateInput,
    baseProps: {},
    fieldProps: {
      name: "meeting_date",
      labelOpts: { text: "Approximate meeting timeframe" },
    },
    widgetProps: { showTime: true },
  },
  {
    type: SelectionInput,
    baseProps: {
      required: true,
    },
    fieldProps: {
      name: "role",
      labelOpts: { text: "Role" },
    },
    widgetProps: {
      selectionValues: {
        "1": "Developer",
        "2": "Designer",
        "3": "Manager",
      },
    },
  },
];

function getFormItems() {
  return formItems.map((item) => {
    return FieldWithWidget(item);
  });
}

function FieldWithWidget({
  type: Component,
  baseProps,
  fieldProps,
  widgetProps,
}: any) {
  return (
    <Field key={fieldProps.name} {...{ ...baseProps, ...fieldProps }}>
      <Component {...{ ...baseProps, ...widgetProps }} />
    </Field>
  );
}

export const Basic = Template.bind({
  initialValues: {
    name: "John",
  },
});
Basic.args = {
  children: getFormItems(),
};
