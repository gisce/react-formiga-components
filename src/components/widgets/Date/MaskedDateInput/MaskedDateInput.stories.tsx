import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MaskedDateInput } from "./MaskedDateInput";
import { Form, Typography } from "antd";
import { MaskedDateInputProps } from "./MaskedDateInput.types";

const { Text, Paragraph } = Typography;

type StoryArgs = MaskedDateInputProps & {
  timezone?: string;
};

export default {
  title: "Components/Widgets/Date/MaskedDateInput",
  component: MaskedDateInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## MaskedDateInput

A date input with DD/MM/YYYY mask that supports **partial entry with autocomplete**.

### Key Features (from issue gisce/webclient#2291):

1. **Masked Input**: Shows DD/MM/YYYY placeholder, guiding users on the expected format
2. **Partial Entry**: Users can enter just the day, or day/month - missing parts autocomplete from current date
3. **Smart Autocomplete**:
   - Type "15" → autocompletes to "15/[current month]/[current year]"
   - Type "15/06" → autocompletes to "15/06/[current year]"
   - Press Enter or blur to trigger autocomplete
4. **Calendar Picker**: Click the calendar button for visual date selection
5. **Validation**: Invalid dates show error tooltip
6. **Keyboard Support**: Enter commits value, Escape commits and moves focus to next element
        `,
      },
    },
  },
  argTypes: {
    timezone: {
      control: "select",
      options: [
        "UTC",
        "Europe/Madrid",
        "Europe/London",
        "America/New_York",
        "Asia/Tokyo",
        "Australia/Sydney",
      ],
      description: "Timezone for the date picker",
      defaultValue: "Europe/Madrid",
    },
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
    showCalendarButton: {
      control: "boolean",
      description: "Whether to show the calendar button",
      defaultValue: true,
    },
  },
} as Meta<typeof MaskedDateInput>;

const Template: StoryFn<StoryArgs> = (args) => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
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
    <div style={{ width: 350 }}>
      <Form
        form={form}
        initialValues={{ [fieldName]: args.value }}
        onFieldsChange={() => {
          const newValue = form.getFieldValue(fieldName);
          setCurrentValue(newValue);
        }}
      >
        <Form.Item name={fieldName} label="Date">
          <MaskedDateInput
            id={fieldName}
            value={form.getFieldValue(fieldName)}
            onChange={handleChange}
            required={args.required}
            readOnly={args.readOnly}
            timezone={args.timezone}
            showCalendarButton={args.showCalendarButton}
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
            Internal value: {currentValue || "(empty)"}
            timezone: {args.timezone}
            required: {args.required?.toString()}
            readOnly: {args.readOnly?.toString()}
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

  return (
    <div style={{ width: 450 }}>
      <Paragraph>
        <Text strong>Try these autocomplete scenarios:</Text>
      </Paragraph>

      <Form form={form} layout="vertical">
        <Form.Item
          label={
            <>
              <Text>Type just day (e.g., "15")</Text>
              <Text type="secondary">
                {" "}
                → autocompletes month/year from today
              </Text>
            </>
          }
        >
          <MaskedDateInput
            id="demo-day-only"
            value={value1}
            onChange={(v) => setValue1(v || undefined)}
            timezone="Europe/Madrid"
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
              <Text>Type day/month (e.g., "15/06")</Text>
              <Text type="secondary"> → autocompletes year from today</Text>
            </>
          }
        >
          <MaskedDateInput
            id="demo-day-month"
            value={value2}
            onChange={(v) => setValue2(v || undefined)}
            timezone="Europe/Madrid"
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
              <Text>Type full date (e.g., "15/06/2024")</Text>
              <Text type="secondary"> → no autocomplete needed</Text>
            </>
          }
        >
          <MaskedDateInput
            id="demo-full"
            value={value3}
            onChange={(v) => setValue3(v || undefined)}
            timezone="Europe/Madrid"
          />
          {value3 && (
            <Text type="success" style={{ marginLeft: 8 }}>
              Result: {value3}
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
          <strong>Tip:</strong> Press Enter or click outside the field to
          trigger autocomplete. Invalid dates will show an error tooltip.
        </Text>
      </div>
    </div>
  );
};

// Main demo showing autocomplete functionality
export const AutocompleteFeature = AutocompleteDemo.bind({});
AutocompleteFeature.args = {
  timezone: "Europe/Madrid",
};
AutocompleteFeature.parameters = {
  docs: {
    description: {
      story:
        "Demonstrates the key usability improvement: users can enter partial dates and the component autocompletes missing parts from the current date.",
    },
  },
};

// Basic usage with DD/MM/YYYY mask
export const Basic = Template.bind({});
Basic.args = {
  id: "basic-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};

// Empty state showing the mask placeholder
export const EmptyWithMask = Template.bind({});
EmptyWithMask.args = {
  id: "empty-masked-date",
  value: undefined,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};
EmptyWithMask.parameters = {
  docs: {
    description: {
      story:
        "Shows the DD/MM/YYYY mask placeholder when empty, guiding users on the expected format.",
    },
  },
};

// Required field with yellow background
export const Required = Template.bind({});
Required.args = {
  id: "required-masked-date",
  value: "2024-03-10",
  required: true,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};
Required.parameters = {
  docs: {
    description: {
      story:
        "Required fields show a yellow background to indicate they must be filled.",
    },
  },
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "readonly-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: true,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};
ReadOnly.parameters = {
  docs: {
    description: {
      story: "Read-only mode disables the input and hides the calendar button.",
    },
  },
};

// Without calendar button - input only
export const WithoutCalendarButton = Template.bind({});
WithoutCalendarButton.args = {
  id: "no-calendar-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: false,
};
WithoutCalendarButton.parameters = {
  docs: {
    description: {
      story:
        "The calendar button can be hidden for a more compact interface, relying only on keyboard input.",
    },
  },
};

// Different timezone - UTC
export const TimezoneUTC = Template.bind({});
TimezoneUTC.args = {
  id: "utc-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "UTC",
  showCalendarButton: true,
};

// Different timezone - Tokyo
export const TimezoneTokyo = Template.bind({});
TimezoneTokyo.args = {
  id: "tokyo-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "Asia/Tokyo",
  showCalendarButton: true,
};
