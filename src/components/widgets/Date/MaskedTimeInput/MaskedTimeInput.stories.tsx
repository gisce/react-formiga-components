import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MaskedTimeInput } from "./MaskedTimeInput";
import { Form, Typography } from "antd";
import { MaskedTimeInputProps } from "./MaskedTimeInput.types";

const { Text, Paragraph } = Typography;

type StoryArgs = MaskedTimeInputProps;

export default {
  title: "Components/Widgets/Date/MaskedTimeInput",
  component: MaskedTimeInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## MaskedTimeInput

A time input with HH:mm:ss mask that supports **partial entry with autocomplete**.

### Key Features (from issue gisce/webclient#2291):

1. **Masked Input**: Shows HH:mm:ss placeholder
2. **Partial Entry**: Users can enter just hours, or hours:minutes - missing parts autocomplete
3. **Smart Autocomplete**:
   - Type "14" → autocompletes to "14:[current min]:[current sec]"
   - Type "14:30" → autocompletes to "14:30:[current sec]"
4. **useZeros Option**: When enabled, autocompletes with zeros instead of current time
   - Type "14" with useZeros → "14:00:00"
5. **Clock Picker**: Click the clock button for visual time selection
6. **Validation**: Invalid times show error tooltip

### This solves the usability issue:
Users no longer need to select hours, minutes AND seconds just to change one value.
For example, to change only the minutes, they type hour:minutes and seconds autocomplete.
        `,
      },
    },
  },
  argTypes: {
    required: {
      control: "boolean",
      description: "Whether the field is required (shows yellow background)",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Whether the field is read-only",
      defaultValue: false,
    },
    useZeros: {
      control: "boolean",
      description:
        "When autocompleting, fill missing parts with zeros instead of current time",
      defaultValue: false,
    },
  },
} as Meta<typeof MaskedTimeInput>;

const Template: StoryFn<StoryArgs> = (args) => {
  const [form] = Form.useForm();
  const fieldName = args.id || "timeField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    args.value,
  );

  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({ [fieldName]: args.value });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);

  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };

  return (
    <div style={{ width: 300 }}>
      <Form
        form={form}
        initialValues={{ [fieldName]: args.value }}
        onFieldsChange={() => {
          const newValue = form.getFieldValue(fieldName);
          setCurrentValue(newValue);
        }}
      >
        <Form.Item name={fieldName} label="Time">
          <MaskedTimeInput
            id={fieldName}
            value={form.getFieldValue(fieldName)}
            onChange={handleChange}
            required={args.required}
            readOnly={args.readOnly}
            useZeros={args.useZeros}
          />
        </Form.Item>
        <div
          style={{
            marginTop: 20,
            padding: 12,
            background: "#f5f5f5",
            borderRadius: 6,
          }}
        >
          <Text strong>Debug Information:</Text>
          <pre style={{ margin: "8px 0 0 0", fontSize: 12 }}>
            {`Internal value: ${currentValue || "(empty)"}
required: ${args.required?.toString()}
readOnly: ${args.readOnly?.toString()}
useZeros: ${args.useZeros?.toString()}`}
          </pre>
        </div>
      </Form>
    </div>
  );
};

const AutocompleteDemo: StoryFn<StoryArgs> = (args) => {
  const [form] = Form.useForm();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const [value3, setValue3] = useState<string | undefined>();
  const [value4, setValue4] = useState<string | undefined>();

  return (
    <div style={{ width: 500 }}>
      <Paragraph>
        <Text strong>
          Try these autocomplete scenarios (solves gisce/webclient#2291):
        </Text>
      </Paragraph>

      <Form form={form} layout="vertical">
        <Form.Item
          label={
            <>
              <Text>Type just hour (e.g., "14")</Text>
              <Text type="secondary"> → autocompletes min:sec from now</Text>
            </>
          }
        >
          <MaskedTimeInput
            id="demo-hour-only"
            value={value1}
            onChange={(v) => setValue1(v || undefined)}
            useZeros={false}
          />
          {value1 && (
            <Text type="success" style={{ marginLeft: 8 }}>
              Result: {value1}
            </Text>
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text>Type hour:min (e.g., "14:30")</Text>
              <Text type="secondary"> → autocompletes seconds from now</Text>
            </>
          }
        >
          <MaskedTimeInput
            id="demo-hour-min"
            value={value2}
            onChange={(v) => setValue2(v || undefined)}
            useZeros={false}
          />
          {value2 && (
            <Text type="success" style={{ marginLeft: 8 }}>
              Result: {value2}
            </Text>
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text>With useZeros: Type "14"</Text>
              <Text type="secondary"> → autocompletes to "14:00:00"</Text>
            </>
          }
        >
          <MaskedTimeInput
            id="demo-use-zeros"
            value={value3}
            onChange={(v) => setValue3(v || undefined)}
            useZeros={true}
          />
          {value3 && (
            <Text type="success" style={{ marginLeft: 8 }}>
              Result: {value3}
            </Text>
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text>Full time (e.g., "14:30:45")</Text>
              <Text type="secondary"> → no autocomplete needed</Text>
            </>
          }
        >
          <MaskedTimeInput
            id="demo-full"
            value={value4}
            onChange={(v) => setValue4(v || undefined)}
          />
          {value4 && (
            <Text type="success" style={{ marginLeft: 8 }}>
              Result: {value4}
            </Text>
          )}
        </Form.Item>
      </Form>

      <div
        style={{
          marginTop: 16,
          padding: 12,
          background: "#e6f7ff",
          borderRadius: 6,
        }}
      >
        <Text type="secondary">
          <strong>Usability improvement:</strong> You no longer need to fill in
          hours, minutes, AND seconds. Just change what you need and the rest
          autocompletes.
        </Text>
      </div>
    </div>
  );
};

// Main demo showing autocomplete functionality - the key usability improvement
export const AutocompleteFeature = AutocompleteDemo.bind({});
AutocompleteFeature.args = {};
AutocompleteFeature.parameters = {
  docs: {
    description: {
      story:
        "**Main feature**: Demonstrates partial entry with autocomplete. Users can change just the fields they need without filling everything.",
    },
  },
};

// Basic usage with HH:mm:ss mask
export const Basic = Template.bind({});
Basic.args = {
  id: "basic-masked-time",
  value: "14:30:00",
  required: false,
  readOnly: false,
  useZeros: false,
};

// Empty state showing the mask placeholder
export const EmptyWithMask = Template.bind({});
EmptyWithMask.args = {
  id: "empty-masked-time",
  value: undefined,
  required: false,
  readOnly: false,
  useZeros: false,
};
EmptyWithMask.parameters = {
  docs: {
    description: {
      story: "Shows the HH:mm:ss mask placeholder when empty.",
    },
  },
};

// Required field with yellow background
export const Required = Template.bind({});
Required.args = {
  id: "required-masked-time",
  value: "14:30:00",
  required: true,
  readOnly: false,
  useZeros: false,
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "readonly-masked-time",
  value: "14:30:00",
  required: false,
  readOnly: true,
  useZeros: false,
};

// Without clock button
export const WithoutClockButton = Template.bind({});
WithoutClockButton.args = {
  id: "no-clock-masked-time",
  value: "14:30:00",
  required: false,
  readOnly: false,
  useZeros: false,
};

// With useZeros - autocomplete fills with zeros instead of current time
export const WithUseZeros = Template.bind({});
WithUseZeros.args = {
  id: "zeros-masked-time",
  value: undefined,
  required: false,
  readOnly: false,
  useZeros: true,
};
WithUseZeros.parameters = {
  docs: {
    description: {
      story:
        "With useZeros enabled, partial entries autocomplete with :00 instead of current time. Try typing just '14' and pressing Enter.",
    },
  },
};

// Midnight time
export const Midnight = Template.bind({});
Midnight.args = {
  id: "midnight-masked-time",
  value: "00:00:00",
  required: false,
  readOnly: false,
  useZeros: false,
};

// End of day
export const EndOfDay = Template.bind({});
EndOfDay.args = {
  id: "endofday-masked-time",
  value: "23:59:59",
  required: false,
  readOnly: false,
  useZeros: false,
};
