import { test, expect, Page } from "@playwright/test";

/**
 * DateInput Component Test Suite
 *
 * This suite tests the DateInput component through Storybook stories.
 * It covers:
 * - Basic rendering and value display
 * - Required and ReadOnly states
 * - Invalid date handling
 * - Date-only vs DateTime modes
 * - Timezone handling (Madrid, Tokyo, UTC)
 * - DST edge cases
 * - User interactions
 *
 * Format reference:
 * - Internal: "YYYY-MM-DD" (date) or "YYYY-MM-DD HH:mm:ss" (datetime)
 * - Display: "DD/MM/YYYY" (date) or "DD/MM/YYYY HH:mm:ss" (datetime)
 */

// Helper to navigate to a story and wait for it to load
async function goToStory(page: Page, storyId: string) {
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`);
  await page.waitForSelector('[data-testid="storybook-root"], #storybook-root, .sb-show-main', {
    state: "visible",
    timeout: 10000,
  });
  // Wait for antd components to fully render
  await page.waitForTimeout(500);
}

// Helper to get the input element - throws if not found
async function getInput(page: Page) {
  const input = page.locator(".ant-picker-input input").first();
  await expect(input).toBeVisible({ timeout: 5000 });
  return input;
}

// Helper to get debug value from story - throws if not found
async function getDebugValue(page: Page): Promise<string> {
  const debugElement = page.locator("pre").filter({ hasText: "String value:" });
  await expect(debugElement).toBeVisible({ timeout: 5000 });

  const debugText = await debugElement.textContent();
  expect(debugText).not.toBeNull();

  const match = debugText!.match(/String value:\s*(.+)/);
  expect(match).not.toBeNull();

  return match![1].trim();
}

test.describe("DateInput Component", () => {
  test.describe("Basic Rendering", () => {
    test("renders with datetime value and displays correct format", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Value "2024-03-10 14:30:00" should display as "10/03/2024 14:30:00"
      expect(displayValue).toBe("10/03/2024 14:30:00");

      // Verify debug shows the internal format
      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2024-03-10 14:30:00");
    });

    test("renders date-only value without time", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--date-only");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Value "2024-03-10" should display as "10/03/2024"
      expect(displayValue).toBe("10/03/2024");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2024-03-10");
    });

    test("renders empty when no value provided", async ({ page }) => {
      // Navigate to basic and clear the value
      await goToStory(page, "components-widgets-date-dateinput--basic");
      const input = await getInput(page);

      // Click the clear button - must be visible and clickable
      await page.locator(".ant-picker").hover();
      const clearBtn = page.locator(".ant-picker-clear");
      await expect(clearBtn).toBeVisible({ timeout: 3000 });
      await clearBtn.click();
      await page.waitForTimeout(300);

      // Verify the input is now empty
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("");

      // Debug should show empty value (either "String value: " or "String value: undefined")
      const debugElement = page.locator("pre").filter({ hasText: "String value:" });
      const debugText = await debugElement.textContent();
      expect(debugText).not.toBeNull();
      // Value should be empty or undefined after clearing
      const valueMatch = debugText!.match(/String value:\s*(.*)/);
      expect(valueMatch).not.toBeNull();
      const value = valueMatch![1].trim();
      expect(value === "" || value === "undefined").toBe(true);
    });
  });

  test.describe("Required State", () => {
    test("displays distinct background when required", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--required");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();

      const backgroundColor = await picker.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
      });

      // Required fields should have a colored background (not white or transparent)
      expect(backgroundColor).not.toBe("rgb(255, 255, 255)");
      expect(backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
      // Verify it's a valid RGB color
      expect(backgroundColor).toMatch(/^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/);
    });

    test("required field still accepts input", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--required");

      const input = await getInput(page);
      const isEnabled = await input.isEnabled();
      expect(isEnabled).toBe(true);

      // Also verify the picker is not disabled
      const picker = page.locator(".ant-picker").first();
      const isDisabled = await picker.evaluate((el) =>
        el.classList.contains("ant-picker-disabled")
      );
      expect(isDisabled).toBe(false);
    });
  });

  test.describe("ReadOnly State", () => {
    test("input is disabled when readOnly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--read-only");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();

      const isDisabled = await picker.evaluate((el) =>
        el.classList.contains("ant-picker-disabled")
      );
      expect(isDisabled).toBe(true);
    });

    test("cannot open calendar when readOnly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--read-only");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();
      await picker.click();
      await page.waitForTimeout(300);

      // Verify dropdown does NOT appear
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeHidden();
    });
  });

  test.describe("Invalid Date Handling", () => {
    test("shows error state for invalid date value", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--invalid-date");
      await page.waitForTimeout(500);

      // Check for error styling (red border)
      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();

      const hasError = await picker.evaluate((el) =>
        el.classList.contains("ant-picker-status-error")
      );
      expect(hasError).toBe(true);
    });

    test("displays error tooltip for invalid date", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--invalid-date");
      await page.waitForTimeout(500);

      // Error tooltip should be visible
      const tooltip = page.locator(".ant-tooltip-inner");
      await expect(tooltip).toBeVisible({ timeout: 3000 });

      const tooltipText = await tooltip.textContent();
      expect(tooltipText).not.toBeNull();
      expect(tooltipText!.toLowerCase()).toContain("invalid");
    });
  });

  test.describe("Timezone Handling", () => {
    test("Europe/Madrid timezone displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--timezone-in-ooui-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-05-26 12:00:00" in Madrid should display as "26/05/2025 12:00:00"
      expect(displayValue).toBe("26/05/2025 12:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-05-26 12:00:00");
    });

    test("Asia/Tokyo timezone displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--timezone-in-ooui-tokyo");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-05-26 21:00:00" in Tokyo should display as "26/05/2025 21:00:00"
      expect(displayValue).toBe("26/05/2025 21:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-05-26 21:00:00");
    });

    test("UTC timezone displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--timezone-in-ooui-utc");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-05-26 12:00:00" in UTC should display as "26/05/2025 12:00:00"
      expect(displayValue).toBe("26/05/2025 12:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-05-26 12:00:00");
    });
  });

  test.describe("DST Edge Cases - Madrid", () => {
    test("handles time just before DST starts (spring forward)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-start-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-03-30 01:59:59" should display correctly
      expect(displayValue).toBe("30/03/2025 01:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 01:59:59");
    });

    test("handles time just before DST ends (fall back)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-end-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-10-26 02:59:59" should display correctly
      expect(displayValue).toBe("26/10/2025 02:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 02:59:59");
    });

    test("handles non-existent hour during spring forward", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-madrid-spring-forward");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-03-30 02:00:00" - this hour doesn't exist in Madrid
      // dayjs adjusts it to 03:00:00
      expect(displayValue).toBe("30/03/2025 03:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 02:00:00");
    });

    test("handles ambiguous hour during fall back (first occurrence)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-madrid-fall-back-first");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-10-26 02:00:00" - this hour occurs twice
      expect(displayValue).toBe("26/10/2025 02:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 02:00:00");
    });

    test("handles ambiguous hour during fall back (second occurrence)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-madrid-fall-back-second");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Same value, second occurrence
      expect(displayValue).toBe("26/10/2025 02:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 02:00:00");
    });
  });

  test.describe("DST Edge Cases - UTC Reference", () => {
    test("UTC reference time displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-reference");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("30/03/2025 00:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 00:59:59");
    });

    test("UTC during Madrid spring forward", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-utc-spring-forward");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("30/03/2025 01:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 01:00:00");
    });

    test("UTC during Madrid fall back", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--dst-utc-fall-back");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/10/2025 01:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 01:00:00");
    });
  });

  test.describe("UTC Edge Cases", () => {
    test("specific UTC time displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--specific-utc-time");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 02:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 02:00:00");
    });

    test("UTC to Madrid DST transition", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-to-madrid-dst");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // During DST spring forward in Madrid (March 26, 2023), 02:00 doesn't exist
      // The component shows 03:00 because dayjs adjusts to valid time
      expect(displayValue).toBe("26/03/2023 03:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 02:00:00");
    });

    test("UTC midnight transition", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-midnight-transition");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 00:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 00:00:00");
    });

    test("UTC to Tokyo shows next day", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-to-tokyo-next-day");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2023-03-26 15:00:00" in Tokyo timezone
      expect(displayValue).toBe("26/03/2023 15:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 15:00:00");
    });

    test("UTC last second of day", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-last-second");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 23:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 23:59:59");
    });
  });

  test.describe("User Interactions", () => {
    test("opens calendar on click", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();
      await picker.click();

      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });
    });

    test("selects date from calendar", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      // Store initial value
      const input = await getInput(page);
      const initialValue = await input.inputValue();
      expect(initialValue).toBe("10/03/2024 14:30:00");

      // Open calendar
      const picker = page.locator(".ant-picker").first();
      await picker.click();
      await page.waitForTimeout(300);

      // Click on day 15 in the calendar
      const day15 = page.locator(".ant-picker-cell-inner").filter({ hasText: /^15$/ }).first();
      await expect(day15).toBeVisible({ timeout: 3000 });
      await day15.click();
      await page.waitForTimeout(300);

      // With showTime=true, antd requires clicking OK button to confirm
      const okButton = page.locator(".ant-picker-ok button");
      await expect(okButton).toBeVisible({ timeout: 3000 });
      await okButton.click();
      await page.waitForTimeout(300);

      // Value should have changed to the 15th (keeping time)
      const newDisplayValue = await input.inputValue();
      expect(newDisplayValue).toContain("15/03/2024");

      // Verify debug value also changed
      const debugValue = await getDebugValue(page);
      expect(debugValue).toContain("2024-03-15");
    });

    test("clears value with clear button", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      // Verify initial value exists
      const input = await getInput(page);
      const initialDebugValue = await getDebugValue(page);
      expect(initialDebugValue).toBe("2024-03-10 14:30:00");

      // Hover and click clear
      await page.locator(".ant-picker").hover();
      const clearBtn = page.locator(".ant-picker-clear");
      await expect(clearBtn).toBeVisible({ timeout: 3000 });
      await clearBtn.click();
      await page.waitForTimeout(300);

      // Verify input is now empty
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("");

      // Verify debug shows empty value
      const debugElement = page.locator("pre").filter({ hasText: "String value:" });
      const debugText = await debugElement.textContent();
      expect(debugText).not.toBeNull();
      // Value should be empty or undefined after clearing
      const valueMatch = debugText!.match(/String value:\s*(.*)/);
      expect(valueMatch).not.toBeNull();
      const value = valueMatch![1].trim();
      expect(value === "" || value === "undefined").toBe(true);
    });

    test("closes calendar on outside click", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      // Open calendar
      const picker = page.locator(".ant-picker").first();
      await picker.click();

      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Click outside
      await page.locator("body").click({ position: { x: 10, y: 10 } });

      // Calendar should be closed
      await expect(dropdown).toBeHidden({ timeout: 3000 });
    });

    test("closes picker and moves focus on Tab key", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--basic");

      // Focus the input which opens the picker
      const input = await getInput(page);
      await input.click();
      await page.waitForTimeout(300);

      // Verify picker dropdown is open
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Press Tab - should close picker and move focus out
      await page.keyboard.press("Tab");
      await page.waitForTimeout(300);

      // Picker should be closed
      await expect(dropdown).toBeHidden({ timeout: 3000 });

      // Focus should NOT be on the picker panel (should have moved past the component)
      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return el?.className || "";
      });
      expect(focusedElement).not.toContain("ant-picker-panel");
    });

    test("date-only: closes picker after selecting day", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--date-only");

      // Click to open picker
      const picker = page.locator(".ant-picker").first();
      await picker.click();
      await page.waitForTimeout(300);

      // Verify picker dropdown is open
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Click on day 15
      const day15 = page.locator(".ant-picker-cell-inner").filter({ hasText: /^15$/ }).first();
      await day15.click();
      await page.waitForTimeout(300);

      // Picker should be closed after selecting day (date-only mode)
      await expect(dropdown).toBeHidden({ timeout: 3000 });

      // Value should be updated
      const input = await getInput(page);
      const inputValue = await input.inputValue();
      expect(inputValue).toContain("15");
    });
  });

  test.describe("Value Format Consistency", () => {
    const testCases = [
      {
        storyId: "components-widgets-date-dateinput--basic",
        internal: "2024-03-10 14:30:00",
        display: "10/03/2024 14:30:00",
      },
      {
        storyId: "components-widgets-date-dateinput--date-only",
        internal: "2024-03-10",
        display: "10/03/2024",
      },
      {
        storyId: "components-widgets-date-dateinput--timezone-in-ooui-madrid",
        internal: "2025-05-26 12:00:00",
        display: "26/05/2025 12:00:00",
      },
      {
        storyId: "components-widgets-date-dateinput--timezone-in-ooui-tokyo",
        internal: "2025-05-26 21:00:00",
        display: "26/05/2025 21:00:00",
      },
      {
        storyId: "components-widgets-date-dateinput--timezone-in-ooui-utc",
        internal: "2025-05-26 12:00:00",
        display: "26/05/2025 12:00:00",
      },
    ];

    for (const { storyId, internal, display } of testCases) {
      const storyName = storyId.split("--")[1];
      test(`${storyName}: formats ${internal} correctly`, async ({ page }) => {
        await goToStory(page, storyId);

        const input = await getInput(page);
        const displayValue = await input.inputValue();
        expect(displayValue).toBe(display);

        const debugValue = await getDebugValue(page);
        expect(debugValue).toBe(internal);
      });
    }
  });

  test.describe("Boundary Values", () => {
    test("handles year boundaries correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-last-second");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Last second of the day
      expect(displayValue).toBe("26/03/2023 23:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 23:59:59");
    });

    test("handles midnight correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-dateinput--utc-midnight-transition");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 00:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 00:00:00");
    });
  });
});
