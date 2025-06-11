import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateInput } from "./DateInput";
import { Form } from "antd";
import dayjs from "@/helpers/dayjs";
import { DateInputProps } from "./DateInput.types";

// Extended props for Storybook args
type StoryArgs = DateInputProps & {
  timezone?: string;
};

export default {
  title: "Components/Widgets/Date/DateInput",
  component: DateInput,
  parameters: {
    layout: "centered",
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
    showTime: {
      control: "boolean",
      description: "Whether to show time picker",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Whether the field is read-only",
      defaultValue: false,
    },
  },
} as Meta<typeof DateInput>;

const Template: StoryFn<StoryArgs> = (args) => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    args.value,
  );

  // Set initial values when args.value changes
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
        <Form.Item name={fieldName} label="Date">
          <DateInput
            id={fieldName}
            value={form.getFieldValue(fieldName)}
            onChange={handleChange}
            showTime={args.showTime}
            required={args.required}
            readOnly={args.readOnly}
            timezone={args.timezone}
          />
        </Form.Item>
        <div style={{ marginTop: 20 }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>
  );
};

// Date picker with time
export const Basic = Template.bind({});
Basic.args = {
  id: "basic-date",
  value: "2024-03-10 14:30:00",
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Required field
export const Required = Template.bind({});
Required.args = {
  id: "required-date",
  value: "2024-03-10 14:30:00",
  showTime: true,
  required: true,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: "readonly-date",
  value: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  showTime: true,
  required: false,
  readOnly: true,
  timezone: "Europe/Madrid",
};

// Invalid date handling
export const InvalidDate = Template.bind({});
InvalidDate.args = {
  id: "invalid-date",
  value: "invalid-date", // Should show error state
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Date only (no time)
export const DateOnly = Template.bind({});
DateOnly.args = {
  id: "date-only",
  value: "2024-03-10",
  showTime: false,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Timezone in OOUI - Madrid
export const TimezoneInOouiMadrid = Template.bind({});
TimezoneInOouiMadrid.args = {
  id: "madrid-tz",
  value: "2025-05-26 12:00:00",
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Timezone in OOUI - Tokyo
export const TimezoneInOouiTokyo = Template.bind({});
TimezoneInOouiTokyo.args = {
  id: "tokyo-tz",
  value: "2025-05-26 21:00:00",
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Asia/Tokyo",
};

// Timezone in OOUI - UTC
export const TimezoneInOouiUTC = Template.bind({});
TimezoneInOouiUTC.args = {
  id: "utc-tz",
  value: "2025-05-26 12:00:00",
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// DST Edge Cases - Madrid (Start of DST)
export const DSTStartMadrid = Template.bind({});
DSTStartMadrid.args = {
  id: "dst-start-madrid",
  value: "2025-03-30 01:59:59", // Just before DST starts
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// DST Edge Cases - Madrid (End of DST)
export const DSTEndMadrid = Template.bind({});
DSTEndMadrid.args = {
  id: "dst-end-madrid",
  value: "2025-10-26 02:59:59", // Just before DST ends
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// DST Edge Cases - UTC Reference
export const UTCReference = Template.bind({});
UTCReference.args = {
  id: "utc-reference",
  value: "2025-03-30 00:59:59", // Reference time in UTC
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// DST Transition - Madrid Spring Forward (Missing Hour)
export const DSTMadridSpringForward = Template.bind({});
DSTMadridSpringForward.args = {
  id: "dst-madrid-spring",
  value: "2025-03-30 02:00:00", // This hour doesn't exist due to spring forward
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// DST Transition - Madrid Fall Back (Ambiguous First Hour)
export const DSTMadridFallBackFirst = Template.bind({});
DSTMadridFallBackFirst.args = {
  id: "dst-madrid-fall-first",
  value: "2025-10-26 02:00:00", // First occurrence of 2 AM
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// DST Transition - Madrid Fall Back (Ambiguous Second Hour)
export const DSTMadridFallBackSecond = Template.bind({});
DSTMadridFallBackSecond.args = {
  id: "dst-madrid-fall-second",
  value: "2025-10-26 02:00:00", // Second occurrence of 2 AM
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// DST Transition - UTC Reference for Madrid Spring Forward
export const DSTUtcSpringForward = Template.bind({});
DSTUtcSpringForward.args = {
  id: "dst-utc-spring",
  value: "2025-03-30 01:00:00", // UTC time during Madrid's spring forward
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// DST Transition - UTC Reference for Madrid Fall Back
export const DSTUtcFallBack = Template.bind({});
DSTUtcFallBack.args = {
  id: "dst-utc-fall",
  value: "2025-10-26 01:00:00", // UTC time during Madrid's fall back
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// UTC Edge Case - Specific UTC Time
export const SpecificUTCTime = Template.bind({});
SpecificUTCTime.args = {
  id: "specific-utc",
  value: "2023-03-26 02:00:00", // Specific UTC time
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// UTC Edge Case - UTC to Madrid DST Transition
export const UTCToMadridDST = Template.bind({});
UTCToMadridDST.args = {
  id: "utc-to-madrid-dst",
  value: "2023-03-26 02:00:00", // UTC time during Madrid's DST transition
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// UTC Edge Case - UTC Midnight Transition
export const UTCMidnightTransition = Template.bind({});
UTCMidnightTransition.args = {
  id: "utc-midnight",
  value: "2023-03-26 00:00:00", // UTC midnight
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};

// UTC Edge Case - UTC to Tokyo (Next Day)
export const UTCToTokyoNextDay = Template.bind({});
UTCToTokyoNextDay.args = {
  id: "utc-to-tokyo",
  value: "2023-03-26 15:00:00", // UTC time that results in next day in Tokyo
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "Asia/Tokyo",
};

// UTC Edge Case - UTC Last Second of Day
export const UTCLastSecond = Template.bind({});
UTCLastSecond.args = {
  id: "utc-last-second",
  value: "2023-03-26 23:59:59", // Last second of the UTC day
  showTime: true,
  required: false,
  readOnly: false,
  timezone: "UTC",
};
