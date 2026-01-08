import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MaskedDateTimeInput } from "./MaskedDateTimeInput";
import { Form, Typography } from "antd";
import { MaskedDateTimeInputProps } from "./MaskedDateTimeInput.types";

const { Text, Paragraph } = Typography;

type StoryArgs = MaskedDateTimeInputProps & {
  timezone?: string;
};

export default {
  title: "Components/Widgets/Date/MaskedDateTimeInput",
  component: MaskedDateTimeInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## MaskedDateTimeInput

A datetime input with DD/MM/YYYY HH:mm:ss mask that supports **partial entry with autocomplete**.

### Key Features (from issue gisce/webclient#2291):

1. **Masked Input**: Shows DD/MM/YYYY HH:mm:ss placeholder
2. **Partial Entry**: Users can enter just the date part, or partial time - missing parts autocomplete
3. **Smart Autocomplete**:
   - Type "15" → autocompletes to "15/[current month]/[current year] [current time]"
   - Type "15/06" → autocompletes to "15/06/[current year] [current time]"
   - Type "15/06/2024 14" → autocompletes to "15/06/2024 14:[current min]:[current sec]"
   - Type "15/06/2024 14:30" → autocompletes to "15/06/2024 14:30:[current sec]"
4. **Calendar Picker**: Click the calendar button for visual date/time selection
5. **Validation**: Invalid dates show error tooltip

### This solves the usability issue:
Users no longer need to select all datetime fields just to change one value.
For example, to change only the minutes, they can type the hour and minutes,
and the seconds will autocomplete from the current time.
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
      description: "Timezone for the datetime picker",
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
} as Meta<typeof MaskedDateTimeInput>;

const Template: StoryFn<StoryArgs> = (args) => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateTimeField";
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
    <div style={{ width: 400 }}>
      <Form
        form={form}
        initialValues={{ [fieldName]: args.value }}
        onFieldsChange={() => {
          const newValue = form.getFieldValue(fieldName);
          setCurrentValue(newValue);
        }}
      >
        <Form.Item name={fieldName} label="Date & Time">
          <MaskedDateTimeInput
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
  const [value4, setValue4] = useState<string | undefined>();

  return (
    <div style={{ width: 550 }}>
      <Paragraph>
        <Text strong>
          Try these autocomplete scenarios (solves gisce/webclient#2291):
        </Text>
      </Paragraph>

      <Form form={form} layout="vertical">
        <Form.Item
          label={
            <>
              <Text>Type just day (e.g., "15")</Text>
              <Text type="secondary">
                {" "}
                → autocompletes month/year/time from now
              </Text>
            </>
          }
        >
          <MaskedDateTimeInput
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
              <Text type="secondary"> → autocompletes year/time from now</Text>
            </>
          }
        >
          <MaskedDateTimeInput
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
              <Text>Type date + hour (e.g., "15/06/2024 14")</Text>
              <Text type="secondary"> → autocompletes min:sec</Text>
            </>
          }
        >
          <MaskedDateTimeInput
            id="demo-date-hour"
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

        <Form.Item
          label={
            <>
              <Text>Type date + hour:min (e.g., "15/06/2024 14:30")</Text>
              <Text type="secondary"> → autocompletes seconds</Text>
            </>
          }
        >
          <MaskedDateTimeInput
            id="demo-date-hour-min"
            value={value4}
            onChange={(v) => setValue4(v || undefined)}
            timezone="Europe/Madrid"
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
          all fields. Just change what you need and the rest autocompletes from
          current date/time.
        </Text>
      </div>
    </div>
  );
};

// Main demo showing autocomplete functionality - the key usability improvement
export const AutocompleteFeature = AutocompleteDemo.bind({});
AutocompleteFeature.args = {
  timezone: "Europe/Madrid",
};
AutocompleteFeature.parameters = {
  docs: {
    description: {
      story:
        "**Main feature**: Demonstrates partial entry with autocomplete. Users can change just the fields they need without filling everything.",
    },
  },
};

// Basic usage with DD/MM/YYYY HH:mm:ss mask
export const Basic = Template.bind({});
Basic.args = {
  id: "basic-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};

// Empty state showing the mask placeholder
export const EmptyWithMask = Template.bind({});
EmptyWithMask.args = {
  id: "empty-masked-datetime",
  value: undefined,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};
EmptyWithMask.parameters = {
  docs: {
    description: {
      story: "Shows the DD/MM/YYYY HH:mm:ss mask placeholder when empty.",
    },
  },
};

// Required field with yellow background
export const Required = Template.bind({});
Required.args = {
  id: "required-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: true,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "readonly-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: true,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};

// Without calendar button
export const WithoutCalendarButton = Template.bind({});
WithoutCalendarButton.args = {
  id: "no-calendar-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: false,
};

// Different timezone - UTC
export const TimezoneUTC = Template.bind({});
TimezoneUTC.args = {
  id: "utc-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "UTC",
  showCalendarButton: true,
};

// Different timezone - Tokyo
export const TimezoneTokyo = Template.bind({});
TimezoneTokyo.args = {
  id: "tokyo-masked-datetime",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Asia/Tokyo",
  showCalendarButton: true,
};

// Midnight time
export const Midnight = Template.bind({});
Midnight.args = {
  id: "midnight-masked-datetime",
  value: "2024-03-10 00:00:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};

// End of day
export const EndOfDay = Template.bind({});
EndOfDay.args = {
  id: "endofday-masked-datetime",
  value: "2024-03-10 23:59:59",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  showCalendarButton: true,
};
