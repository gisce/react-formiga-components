import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateMaskedInput } from "./DateMaskedInput";
import { Form, Typography, Divider, Space } from "antd";
import { DateMaskedInputProps } from "./DateMaskedInput.types";
import { LocaleContextProvider, Locale } from "@/context/LocaleContext";

const { Text, Title, Paragraph } = Typography;

export default {
  title: "Components/Widgets/Date/DateMaskedInput",
  component: DateMaskedInput,
  parameters: {
    layout: "centered",
    actions: { disable: true },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["date", "datetime", "time"],
      description: "Type of input",
    },
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
      description: "Timezone (for date/datetime)",
    },
    required: {
      control: "boolean",
      description: "Shows yellow background when required",
    },
    readOnly: {
      control: "boolean",
      description: "Disables the input",
    },
    useZeros: {
      control: "boolean",
      description: "For time type: use 00:00:00 instead of current time",
    },
  },
} as Meta<typeof DateMaskedInput>;

// Template with debug info - matching DateInput format exactly
const Template: StoryFn<DateMaskedInputProps> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const { onChange: _onChange, ...restArgs } = args as DateMaskedInputProps & {
    onChange?: unknown;
  };

  return (
    <div style={{ width: 300 }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput
            {...restArgs}
            value={value}
            onChange={(v) => setValue(v || undefined)}
          />
        </Form.Item>
        <div style={{ marginTop: 20 }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>
  );
};

// ============================================
// BASIC STORIES (matching DateInput)
// ============================================

// Date picker with time
export const Basic = Template.bind({});
Basic.args = {
  type: "datetime",
  id: "basic-date",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Required field
export const Required = Template.bind({});
Required.args = {
  type: "datetime",
  id: "required-date",
  value: "2024-03-10 14:30:00",
  required: true,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  type: "datetime",
  id: "readonly-date",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: true,
  timezone: "Europe/Madrid",
};

// Invalid date handling
export const InvalidDate = Template.bind({});
InvalidDate.args = {
  type: "datetime",
  id: "invalid-date",
  value: "invalid-date",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// Date only (no time)
export const DateOnly = Template.bind({});
DateOnly.args = {
  type: "date",
  id: "date-only",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
};

// ============================================
// TIMEZONE STORIES
// ============================================

export const TimezoneInOouiMadrid = Template.bind({});
TimezoneInOouiMadrid.args = {
  type: "datetime",
  id: "madrid-tz",
  value: "2025-05-26 12:00:00",
  timezone: "Europe/Madrid",
};

export const TimezoneInOouiTokyo = Template.bind({});
TimezoneInOouiTokyo.args = {
  type: "datetime",
  id: "tokyo-tz",
  value: "2025-05-26 21:00:00",
  timezone: "Asia/Tokyo",
};

export const TimezoneInOouiUTC = Template.bind({});
TimezoneInOouiUTC.args = {
  type: "datetime",
  id: "utc-tz",
  value: "2025-05-26 12:00:00",
  timezone: "UTC",
};

// ============================================
// DST EDGE CASES
// ============================================

export const DSTStartMadrid = Template.bind({});
DSTStartMadrid.args = {
  type: "datetime",
  id: "dst-start-madrid",
  value: "2025-03-30 01:59:59",
  timezone: "Europe/Madrid",
};

export const DSTEndMadrid = Template.bind({});
DSTEndMadrid.args = {
  type: "datetime",
  id: "dst-end-madrid",
  value: "2025-10-26 02:59:59",
  timezone: "Europe/Madrid",
};

export const UTCReference = Template.bind({});
UTCReference.args = {
  type: "datetime",
  id: "utc-reference",
  value: "2025-03-30 00:59:59",
  timezone: "UTC",
};

export const DSTMadridSpringForward = Template.bind({});
DSTMadridSpringForward.args = {
  type: "datetime",
  id: "dst-madrid-spring",
  value: "2025-03-30 02:00:00",
  timezone: "Europe/Madrid",
};

export const DSTMadridFallBackFirst = Template.bind({});
DSTMadridFallBackFirst.args = {
  type: "datetime",
  id: "dst-madrid-fall-first",
  value: "2025-10-26 02:00:00",
  timezone: "Europe/Madrid",
};

export const DSTMadridFallBackSecond = Template.bind({});
DSTMadridFallBackSecond.args = {
  type: "datetime",
  id: "dst-madrid-fall-second",
  value: "2025-10-26 02:00:00",
  timezone: "Europe/Madrid",
};

export const DSTUtcSpringForward = Template.bind({});
DSTUtcSpringForward.args = {
  type: "datetime",
  id: "dst-utc-spring",
  value: "2025-03-30 01:00:00",
  timezone: "UTC",
};

export const DSTUtcFallBack = Template.bind({});
DSTUtcFallBack.args = {
  type: "datetime",
  id: "dst-utc-fall",
  value: "2025-10-26 01:00:00",
  timezone: "UTC",
};

export const SpecificUTCTime = Template.bind({});
SpecificUTCTime.args = {
  type: "datetime",
  id: "specific-utc",
  value: "2023-03-26 02:00:00",
  timezone: "UTC",
};

export const UTCToMadridDST = Template.bind({});
UTCToMadridDST.args = {
  type: "datetime",
  id: "utc-to-madrid-dst",
  value: "2023-03-26 02:00:00",
  timezone: "Europe/Madrid",
};

export const UTCMidnightTransition = Template.bind({});
UTCMidnightTransition.args = {
  type: "datetime",
  id: "utc-midnight",
  value: "2023-03-26 00:00:00",
  timezone: "UTC",
};

export const UTCToTokyoNextDay = Template.bind({});
UTCToTokyoNextDay.args = {
  type: "datetime",
  id: "utc-to-tokyo",
  value: "2023-03-26 15:00:00",
  timezone: "Asia/Tokyo",
};

export const UTCLastSecond = Template.bind({});
UTCLastSecond.args = {
  type: "datetime",
  id: "utc-last-second",
  value: "2023-03-26 23:59:59",
  timezone: "UTC",
};

// ============================================
// ADDITIONAL: AUTOCOMPLETE DEMO
// ============================================

const AutocompleteDemo: StoryFn = () => {
  const [values, setValues] = useState<Record<string, string | undefined>>({});

  const updateValue = (key: string, value: string | null | undefined) => {
    setValues((prev) => ({ ...prev, [key]: value || undefined }));
  };

  return (
    <div style={{ width: 550 }}>
      <Title level={4}>Autocomplete Scenarios</Title>
      <Paragraph type="secondary">
        Type partial values and press Enter to see autocomplete in action.
      </Paragraph>

      <Divider orientation="left">Date</Divider>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Form.Item
          label={
            <>
              Type <Text code>15</Text> → autocompletes month/year
            </>
          }
          style={{ marginBottom: 8 }}
        >
          <DateMaskedInput
            type="date"
            id="auto-date-1"
            value={values["date1"]}
            onChange={(v) => updateValue("date1", v)}
          />
          {values["date1"] && <Text type="success"> → {values["date1"]}</Text>}
        </Form.Item>
        <Form.Item
          label={
            <>
              Type <Text code>15/06</Text> → autocompletes year
            </>
          }
          style={{ marginBottom: 8 }}
        >
          <DateMaskedInput
            type="date"
            id="auto-date-2"
            value={values["date2"]}
            onChange={(v) => updateValue("date2", v)}
          />
          {values["date2"] && <Text type="success"> → {values["date2"]}</Text>}
        </Form.Item>
      </Space>

      <Divider orientation="left">DateTime</Divider>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Form.Item
          label={
            <>
              Type <Text code>15/06/2024 14</Text> → autocompletes min:sec
            </>
          }
          style={{ marginBottom: 8 }}
        >
          <DateMaskedInput
            type="datetime"
            id="auto-datetime-1"
            value={values["datetime1"]}
            onChange={(v) => updateValue("datetime1", v)}
          />
          {values["datetime1"] && (
            <Text type="success"> → {values["datetime1"]}</Text>
          )}
        </Form.Item>
      </Space>

      <Divider orientation="left">Time</Divider>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Form.Item
          label={
            <>
              Type <Text code>14</Text> → autocompletes min:sec
            </>
          }
          style={{ marginBottom: 8 }}
        >
          <DateMaskedInput
            type="time"
            id="auto-time-1"
            value={values["time1"]}
            onChange={(v) => updateValue("time1", v)}
          />
          {values["time1"] && <Text type="success"> → {values["time1"]}</Text>}
        </Form.Item>
        <Form.Item
          label={
            <>
              Type <Text code>14:30</Text> → autocompletes seconds
            </>
          }
          style={{ marginBottom: 8 }}
        >
          <DateMaskedInput
            type="time"
            id="auto-time-2"
            value={values["time2"]}
            onChange={(v) => updateValue("time2", v)}
          />
          {values["time2"] && <Text type="success"> → {values["time2"]}</Text>}
        </Form.Item>
      </Space>
    </div>
  );
};

export const Autocomplete = AutocompleteDemo.bind({});
Autocomplete.parameters = {
  docs: {
    description: {
      story:
        "Interactive demo showing autocomplete for all input types. Users can enter partial values and the component fills in the rest from current date/time.",
    },
  },
};

// ============================================
// ADDITIONAL: KEYBOARD BEHAVIOR TEST
// ============================================

const KeyboardDemo: StoryFn = () => {
  const [values, setValues] = useState<Record<string, string | undefined>>({
    clear: "2024-06-15",
  });
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs((prev) => [
      ...prev.slice(-9),
      `${new Date().toLocaleTimeString()}: ${msg}`,
    ]);
  };

  const updateValue = (key: string, value: string | null | undefined) => {
    setValues((prev) => ({ ...prev, [key]: value || undefined }));
    addLog(`${key}: ${value ?? "null"}`);
  };

  return (
    <div style={{ width: 550 }}>
      <Title level={4}>Keyboard & Mouse Behavior</Title>

      <Form layout="vertical">
        <Form.Item
          label={
            <>
              <Text strong>1. Enter Key</Text>
              <Text type="secondary"> - Type &quot;23&quot; then Enter</Text>
            </>
          }
        >
          <DateMaskedInput
            type="date"
            id="test-enter"
            value={values["enter"]}
            onChange={(v) => updateValue("enter", v)}
          />
          {values["enter"] && <Text type="success"> → {values["enter"]}</Text>}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>2. Blur</Text>
              <Text type="secondary">
                {" "}
                - Type &quot;10&quot; then click outside
              </Text>
            </>
          }
        >
          <DateMaskedInput
            type="date"
            id="test-blur"
            value={values["blur"]}
            onChange={(v) => updateValue("blur", v)}
          />
          {values["blur"] && <Text type="success"> → {values["blur"]}</Text>}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>3. Double-click</Text>
              <Text type="secondary">
                {" "}
                - Type &quot;25/12&quot; then double-click
              </Text>
            </>
          }
        >
          <DateMaskedInput
            type="date"
            id="test-dblclick"
            value={values["dblclick"]}
            onChange={(v) => updateValue("dblclick", v)}
          />
          {values["dblclick"] && (
            <Text type="success"> → {values["dblclick"]}</Text>
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>4. Clear value</Text>
              <Text type="secondary">
                {" "}
                - Select all, backspace, blur (or hover + click X)
              </Text>
            </>
          }
        >
          <DateMaskedInput
            type="date"
            id="test-clear"
            value={values["clear"]}
            onChange={(v) => updateValue("clear", v)}
          />
          <Text type={values["clear"] ? "success" : "warning"}>
            {" "}
            → {values["clear"] || "(empty)"}
          </Text>
        </Form.Item>
      </Form>

      <div
        style={{
          marginTop: 16,
          padding: 12,
          background: "#f0f0f0",
          borderRadius: 6,
          fontFamily: "monospace",
          fontSize: 12,
          maxHeight: 120,
          overflowY: "auto",
        }}
      >
        <Text strong>Event Log:</Text>
        {logs.length === 0 ? (
          <div style={{ color: "#888" }}>No events yet...</div>
        ) : (
          logs.map((log, i) => <div key={i}>{log}</div>)
        )}
      </div>
    </div>
  );
};

export const KeyboardBehavior = KeyboardDemo.bind({});
KeyboardBehavior.parameters = {
  docs: {
    description: {
      story: `
Test keyboard and mouse behaviors:
- **Enter**: Autocomplete and commit
- **Escape**: Commit and move to next element
- **Blur**: Autocomplete and commit
- **Double-click**: Autocomplete and commit
- **Clear**: Delete content + blur, or hover + click X icon
      `,
    },
  },
};

// ============================================
// LOCALE STORIES
// ============================================

type LocaleStoryArgs = DateMaskedInputProps & {
  locale: Locale;
};

const LocaleTemplate: StoryFn<LocaleStoryArgs> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const { onChange: _onChange, ...restArgs } = args as LocaleStoryArgs & {
    onChange?: unknown;
  };

  return (
    <LocaleContextProvider locale={args.locale}>
      <div style={{ width: 300 }}>
        <Form layout="vertical">
          <Form.Item label="Date">
            <DateMaskedInput
              {...restArgs}
              value={value}
              onChange={(v) => setValue(v || undefined)}
            />
          </Form.Item>
          <div style={{ marginTop: 20 }}>
            <strong>Debug Information:</strong>
            <pre>String value: {value}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>type: {args.type}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>
  );
};

// Spanish locale
export const LocaleSpanish = LocaleTemplate.bind({});
LocaleSpanish.args = {
  type: "datetime",
  id: "locale-spanish",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  locale: "es_ES",
};
LocaleSpanish.storyName = "Locale: Spanish (es_ES)";

// Catalan locale
export const LocaleCatalan = LocaleTemplate.bind({});
LocaleCatalan.args = {
  type: "datetime",
  id: "locale-catalan",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  locale: "ca_ES",
};
LocaleCatalan.storyName = "Locale: Catalan (ca_ES)";

// English locale (for comparison)
export const LocaleEnglish = LocaleTemplate.bind({});
LocaleEnglish.args = {
  type: "datetime",
  id: "locale-english",
  value: "2024-03-10 14:30:00",
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
  locale: "en_US",
};
LocaleEnglish.storyName = "Locale: English (en_US)";
