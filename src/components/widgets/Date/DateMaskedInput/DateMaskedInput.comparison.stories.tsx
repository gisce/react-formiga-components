import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateMaskedInput } from "./DateMaskedInput";
import { DateInput } from "../DateInput/DateInput";
import { Form, Typography, Divider } from "antd";
import dayjs from "@/helpers/dayjs";

const { Text } = Typography;

export default {
  title: "Components/Widgets/Date/DateMaskedInput/Comparison",
  parameters: {
    layout: "centered",
  },
} as Meta;

// Side-by-side comparison template
const ComparisonTemplate: StoryFn<{
  storyName: string;
  value: string | undefined;
  timezone: string;
  showTime: boolean;
  required?: boolean;
  readOnly?: boolean;
}> = (args) => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false,
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(
    value,
  );

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(
    value,
  );

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);

  const maskedType = showTime ? "datetime" : "date";

  return (
    <div style={{ width: 700 }}>
      <Text strong style={{ fontSize: 16, marginBottom: 16, display: "block" }}>
        Story: {storyName}
      </Text>

      <div style={{ display: "flex", gap: 24 }}>
        {/* DateInput (Old) */}
        <div style={{ flex: 1 }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput
                id="old-input"
                value={dateInputValue}
                onChange={(v) => setDateInputValue(v || undefined)}
                showTime={showTime}
                required={required}
                readOnly={readOnly}
                timezone={timezone}
              />
            </Form.Item>
          </Form>
          <div
            style={{
              padding: 12,
              background: "#f5f5f5",
              borderRadius: 6,
              fontSize: 12,
            }}
          >
            <Text strong>Debug:</Text>
            <pre style={{ margin: "8px 0 0 0" }}>
              {`value: ${dateInputValue || "(empty)"}
timezone: ${timezone}
showTime: ${showTime}`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{ flex: 1 }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput
                id="new-input"
                type={maskedType}
                value={maskedInputValue}
                onChange={(v) => setMaskedInputValue(v || undefined)}
                required={required}
                readOnly={readOnly}
                timezone={timezone}
              />
            </Form.Item>
          </Form>
          <div
            style={{
              padding: 12,
              background: "#f5f5f5",
              borderRadius: 6,
              fontSize: 12,
            }}
          >
            <Text strong>Debug:</Text>
            <pre style={{ margin: "8px 0 0 0" }}>
              {`value: ${maskedInputValue || "(empty)"}
timezone: ${timezone}
type: ${maskedType}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div
        style={{
          marginTop: 16,
          padding: 12,
          background:
            dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
          border: `1px solid ${
            dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"
          }`,
          borderRadius: 6,
        }}
      >
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && (
          <div style={{ marginTop: 8, fontSize: 12 }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// BASIC STORIES
// ============================================

export const Basic = ComparisonTemplate.bind({});
Basic.args = {
  storyName: "Basic",
  value: "2024-03-10 14:30:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const Required = ComparisonTemplate.bind({});
Required.args = {
  storyName: "Required",
  value: "2024-03-10 14:30:00",
  timezone: "Europe/Madrid",
  showTime: true,
  required: true,
};

export const ReadOnly = ComparisonTemplate.bind({});
ReadOnly.args = {
  storyName: "ReadOnly",
  value: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  timezone: "Europe/Madrid",
  showTime: true,
  readOnly: true,
};

export const InvalidDate = ComparisonTemplate.bind({});
InvalidDate.args = {
  storyName: "InvalidDate",
  value: "invalid-date",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const DateOnly = ComparisonTemplate.bind({});
DateOnly.args = {
  storyName: "DateOnly",
  value: "2024-03-10",
  timezone: "Europe/Madrid",
  showTime: false,
};

// ============================================
// TIMEZONE STORIES
// ============================================

export const TimezoneInOouiMadrid = ComparisonTemplate.bind({});
TimezoneInOouiMadrid.args = {
  storyName: "TimezoneInOouiMadrid",
  value: "2025-05-26 12:00:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const TimezoneInOouiTokyo = ComparisonTemplate.bind({});
TimezoneInOouiTokyo.args = {
  storyName: "TimezoneInOouiTokyo",
  value: "2025-05-26 21:00:00",
  timezone: "Asia/Tokyo",
  showTime: true,
};

export const TimezoneInOouiUTC = ComparisonTemplate.bind({});
TimezoneInOouiUTC.args = {
  storyName: "TimezoneInOouiUTC",
  value: "2025-05-26 12:00:00",
  timezone: "UTC",
  showTime: true,
};

// ============================================
// DST EDGE CASES
// ============================================

export const DSTStartMadrid = ComparisonTemplate.bind({});
DSTStartMadrid.args = {
  storyName: "DSTStartMadrid",
  value: "2025-03-30 01:59:59",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const DSTEndMadrid = ComparisonTemplate.bind({});
DSTEndMadrid.args = {
  storyName: "DSTEndMadrid",
  value: "2025-10-26 02:59:59",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const UTCReference = ComparisonTemplate.bind({});
UTCReference.args = {
  storyName: "UTCReference",
  value: "2025-03-30 00:59:59",
  timezone: "UTC",
  showTime: true,
};

export const DSTMadridSpringForward = ComparisonTemplate.bind({});
DSTMadridSpringForward.args = {
  storyName: "DSTMadridSpringForward",
  value: "2025-03-30 02:00:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const DSTMadridFallBackFirst = ComparisonTemplate.bind({});
DSTMadridFallBackFirst.args = {
  storyName: "DSTMadridFallBackFirst",
  value: "2025-10-26 02:00:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const DSTMadridFallBackSecond = ComparisonTemplate.bind({});
DSTMadridFallBackSecond.args = {
  storyName: "DSTMadridFallBackSecond",
  value: "2025-10-26 02:00:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const DSTUtcSpringForward = ComparisonTemplate.bind({});
DSTUtcSpringForward.args = {
  storyName: "DSTUtcSpringForward",
  value: "2025-03-30 01:00:00",
  timezone: "UTC",
  showTime: true,
};

export const DSTUtcFallBack = ComparisonTemplate.bind({});
DSTUtcFallBack.args = {
  storyName: "DSTUtcFallBack",
  value: "2025-10-26 01:00:00",
  timezone: "UTC",
  showTime: true,
};

export const SpecificUTCTime = ComparisonTemplate.bind({});
SpecificUTCTime.args = {
  storyName: "SpecificUTCTime",
  value: "2023-03-26 02:00:00",
  timezone: "UTC",
  showTime: true,
};

export const UTCToMadridDST = ComparisonTemplate.bind({});
UTCToMadridDST.args = {
  storyName: "UTCToMadridDST",
  value: "2023-03-26 02:00:00",
  timezone: "Europe/Madrid",
  showTime: true,
};

export const UTCMidnightTransition = ComparisonTemplate.bind({});
UTCMidnightTransition.args = {
  storyName: "UTCMidnightTransition",
  value: "2023-03-26 00:00:00",
  timezone: "UTC",
  showTime: true,
};

export const UTCToTokyoNextDay = ComparisonTemplate.bind({});
UTCToTokyoNextDay.args = {
  storyName: "UTCToTokyoNextDay",
  value: "2023-03-26 15:00:00",
  timezone: "Asia/Tokyo",
  showTime: true,
};

export const UTCLastSecond = ComparisonTemplate.bind({});
UTCLastSecond.args = {
  storyName: "UTCLastSecond",
  value: "2023-03-26 23:59:59",
  timezone: "UTC",
  showTime: true,
};
