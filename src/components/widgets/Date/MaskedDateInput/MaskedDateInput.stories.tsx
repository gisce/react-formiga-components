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
   - Triggers: Enter key, blur, or double-click
4. **Calendar Picker**: Click the calendar button for visual date selection
5. **Validation**: Invalid dates show error tooltip

### Keyboard & Mouse Behaviors:

| Action | Behavior |
|--------|----------|
| **Enter** | Autocompletes partial value and commits |
| **Escape** | Commits current value and moves focus to next element |
| **Blur** | Autocompletes partial value and commits |
| **Double-click** | Autocompletes partial value and commits (same as Enter) |
| **Delete all + blur** | Clears the value (sets to null) |
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
timezone: ${args.timezone}
required: ${args.required?.toString()}
readOnly: ${args.readOnly?.toString()}`}
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
};

// Empty state showing the mask placeholder
export const EmptyWithMask = Template.bind({});
EmptyWithMask.args = {
  id: "empty-masked-date",
  value: undefined,
  required: false,
  readOnly: false,
  timezone: "Europe/Madrid",
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
};

// Different timezone - Tokyo
export const TimezoneTokyo = Template.bind({});
TimezoneTokyo.args = {
  id: "tokyo-masked-date",
  value: "2024-03-10",
  required: false,
  readOnly: false,
  timezone: "Asia/Tokyo",
};

// Comprehensive keyboard behavior demo
const KeyboardBehaviorDemo: StoryFn<StoryArgs> = () => {
  const [values, setValues] = useState<{
    enter: string | undefined;
    escape: string | undefined;
    blur: string | undefined;
    doubleClick: string | undefined;
    clear: string | undefined;
  }>({
    enter: undefined,
    escape: undefined,
    blur: undefined,
    doubleClick: undefined,
    clear: "2024-06-15",
  });

  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [
      ...prev.slice(-9),
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  return (
    <div style={{ width: 550 }}>
      <Paragraph>
        <Text strong style={{ fontSize: 16 }}>
          Keyboard & Mouse Behavior Testing
        </Text>
      </Paragraph>
      <Paragraph type="secondary">
        Test each input to verify the behavior described. Watch the event log
        below.
      </Paragraph>

      <Form layout="vertical">
        <Form.Item
          label={
            <>
              <Text strong>1. Enter Key</Text>
              <Text type="secondary"> - Type "23" then press Enter</Text>
            </>
          }
        >
          <MaskedDateInput
            id="test-enter"
            value={values.enter}
            onChange={(v) => {
              setValues((prev) => ({ ...prev, enter: v || undefined }));
              addLog(`Enter field: value set to "${v}"`);
            }}
            timezone="Europe/Madrid"
          />
          {values.enter && <Text type="success"> → {values.enter}</Text>}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>2. Escape Key</Text>
              <Text type="secondary">
                {" "}
                - Type "15/06" then press Escape (focus moves to next input)
              </Text>
            </>
          }
        >
          <MaskedDateInput
            id="test-escape"
            value={values.escape}
            onChange={(v) => {
              setValues((prev) => ({ ...prev, escape: v || undefined }));
              addLog(`Escape field: value set to "${v}"`);
            }}
            timezone="Europe/Madrid"
          />
          {values.escape && <Text type="success"> → {values.escape}</Text>}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>3. Blur (click outside)</Text>
              <Text type="secondary"> - Type "10" then click outside</Text>
            </>
          }
        >
          <MaskedDateInput
            id="test-blur"
            value={values.blur}
            onChange={(v) => {
              setValues((prev) => ({ ...prev, blur: v || undefined }));
              addLog(`Blur field: value set to "${v}"`);
            }}
            timezone="Europe/Madrid"
          />
          {values.blur && <Text type="success"> → {values.blur}</Text>}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>4. Double-click</Text>
              <Text type="secondary"> - Type "25/12" then double-click</Text>
            </>
          }
        >
          <MaskedDateInput
            id="test-doubleclick"
            value={values.doubleClick}
            onChange={(v) => {
              setValues((prev) => ({ ...prev, doubleClick: v || undefined }));
              addLog(`Double-click field: value set to "${v}"`);
            }}
            timezone="Europe/Madrid"
          />
          {values.doubleClick && (
            <Text type="success"> → {values.doubleClick}</Text>
          )}
        </Form.Item>

        <Form.Item
          label={
            <>
              <Text strong>5. Clear value</Text>
              <Text type="secondary">
                {" "}
                - Delete all content and click outside (should become null)
              </Text>
            </>
          }
        >
          <MaskedDateInput
            id="test-clear"
            value={values.clear}
            onChange={(v) => {
              setValues((prev) => ({ ...prev, clear: v || undefined }));
              addLog(`Clear field: value set to "${v ?? "null"}"`);
            }}
            timezone="Europe/Madrid"
          />
          <Text type={values.clear ? "success" : "warning"}>
            {" "}
            → {values.clear || "(empty/null)"}
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
          maxHeight: 150,
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

export const KeyboardBehaviors = KeyboardBehaviorDemo.bind({});
KeyboardBehaviors.parameters = {
  docs: {
    description: {
      story: `
Interactive demo to test all keyboard and mouse behaviors:

1. **Enter**: Autocompletes partial date and commits
2. **Escape**: Commits and moves focus to next focusable element
3. **Blur**: Autocompletes partial date and commits
4. **Double-click**: Same as Enter - autocompletes and commits
5. **Clear**: Delete all content and blur to clear the value
      `,
    },
  },
};
