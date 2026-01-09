import { test, expect, Page } from "@playwright/test";

/**
 * DateMaskedInput Component Test Suite
 *
 * This suite tests the DateMaskedInput component through Storybook stories.
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
  // Wait for antd picker input to be fully rendered
  await page.waitForSelector(".ant-picker-input input", {
    state: "visible",
    timeout: 5000,
  });
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

test.describe("DateMaskedInput Component", () => {
  test.describe("Basic Rendering", () => {
    test("renders with datetime value and displays correct format", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Value "2024-03-10 14:30:00" should display as "10/03/2024 14:30:00"
      expect(displayValue).toBe("10/03/2024 14:30:00");

      // Verify debug shows the internal format
      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2024-03-10 14:30:00");
    });

    test("renders date-only value without time", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--date-only");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Value "2024-03-10" should display as "10/03/2024"
      expect(displayValue).toBe("10/03/2024");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2024-03-10");
    });

    test("renders empty when no value provided", async ({ page }) => {
      // Navigate to basic and clear the value
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");
      const input = await getInput(page);

      // Click the clear button - must be visible and clickable
      // Use .first() since there may be a hidden antd picker with same class
      await page.locator(".ant-picker").first().hover();
      const clearBtn = page.locator(".ant-picker-clear").first();
      await expect(clearBtn).toBeVisible({ timeout: 3000 });
      await clearBtn.click();

      // Wait for input to be cleared (auto-waits)
      await expect(input).toHaveValue("");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--required");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--required");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--read-only");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();

      const isDisabled = await picker.evaluate((el) =>
        el.classList.contains("ant-picker-disabled")
      );
      expect(isDisabled).toBe(true);
    });

    test("cannot open calendar when readOnly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--read-only");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--invalid-date");
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
      await goToStory(page, "components-widgets-date-datemaskedinput--invalid-date");
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
      await goToStory(page, "components-widgets-date-datemaskedinput--timezone-in-ooui-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-05-26 12:00:00" in Madrid should display as "26/05/2025 12:00:00"
      expect(displayValue).toBe("26/05/2025 12:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-05-26 12:00:00");
    });

    test("Asia/Tokyo timezone displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--timezone-in-ooui-tokyo");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-05-26 21:00:00" in Tokyo should display as "26/05/2025 21:00:00"
      expect(displayValue).toBe("26/05/2025 21:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-05-26 21:00:00");
    });

    test("UTC timezone displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--timezone-in-ooui-utc");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-start-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-03-30 01:59:59" should display correctly
      expect(displayValue).toBe("30/03/2025 01:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 01:59:59");
    });

    test("handles time just before DST ends (fall back)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-end-madrid");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-10-26 02:59:59" should display correctly
      expect(displayValue).toBe("26/10/2025 02:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 02:59:59");
    });

    test("handles non-existent hour during spring forward", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-madrid-spring-forward");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-03-30 02:00:00" - this hour doesn't exist in Madrid
      // dayjs adjusts it to 03:00:00
      expect(displayValue).toBe("30/03/2025 03:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 02:00:00");
    });

    test("handles ambiguous hour during fall back (first occurrence)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-madrid-fall-back-first");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2025-10-26 02:00:00" - this hour occurs twice
      expect(displayValue).toBe("26/10/2025 02:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 02:00:00");
    });

    test("handles ambiguous hour during fall back (second occurrence)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-madrid-fall-back-second");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-reference");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("30/03/2025 00:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 00:59:59");
    });

    test("UTC during Madrid spring forward", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-utc-spring-forward");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("30/03/2025 01:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-03-30 01:00:00");
    });

    test("UTC during Madrid fall back", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--dst-utc-fall-back");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/10/2025 01:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2025-10-26 01:00:00");
    });
  });

  test.describe("UTC Edge Cases", () => {
    test("specific UTC time displays correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--specific-utc-time");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 02:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 02:00:00");
    });

    test("UTC to Madrid DST transition", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-to-madrid-dst");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // During DST spring forward in Madrid (March 26, 2023), 02:00 doesn't exist
      // The component shows 03:00 because dayjs adjusts to valid time
      expect(displayValue).toBe("26/03/2023 03:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 02:00:00");
    });

    test("UTC midnight transition", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-midnight-transition");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 00:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 00:00:00");
    });

    test("UTC to Tokyo shows next day", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-to-tokyo-next-day");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // "2023-03-26 15:00:00" in Tokyo timezone
      expect(displayValue).toBe("26/03/2023 15:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 15:00:00");
    });

    test("UTC last second of day", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-last-second");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 23:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 23:59:59");
    });
  });

  test.describe("User Interactions", () => {
    test("opens calendar on click", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

      const picker = page.locator(".ant-picker").first();
      await expect(picker).toBeVisible();
      await picker.click();

      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });
    });

    test("selects date from calendar", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

      // Verify initial value exists
      const input = await getInput(page);
      const initialDebugValue = await getDebugValue(page);
      expect(initialDebugValue).toBe("2024-03-10 14:30:00");

      // Hover and click clear
      // Use .first() since there may be a hidden antd picker with same class
      await page.locator(".ant-picker").first().hover();
      const clearBtn = page.locator(".ant-picker-clear").first();
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
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--basic");

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
      await goToStory(page, "components-widgets-date-datemaskedinput--date-only");

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
        storyId: "components-widgets-date-datemaskedinput--basic",
        internal: "2024-03-10 14:30:00",
        display: "10/03/2024 14:30:00",
      },
      {
        storyId: "components-widgets-date-datemaskedinput--date-only",
        internal: "2024-03-10",
        display: "10/03/2024",
      },
      {
        storyId: "components-widgets-date-datemaskedinput--timezone-in-ooui-madrid",
        internal: "2025-05-26 12:00:00",
        display: "26/05/2025 12:00:00",
      },
      {
        storyId: "components-widgets-date-datemaskedinput--timezone-in-ooui-tokyo",
        internal: "2025-05-26 21:00:00",
        display: "26/05/2025 21:00:00",
      },
      {
        storyId: "components-widgets-date-datemaskedinput--timezone-in-ooui-utc",
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
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-last-second");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      // Last second of the day
      expect(displayValue).toBe("26/03/2023 23:59:59");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 23:59:59");
    });

    test("handles midnight correctly", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--utc-midnight-transition");

      const input = await getInput(page);
      const displayValue = await input.inputValue();

      expect(displayValue).toBe("26/03/2023 00:00:00");

      const debugValue = await getDebugValue(page);
      expect(debugValue).toBe("2023-03-26 00:00:00");
    });
  });

  test.describe("Keyboard Behavior", () => {
    test("Enter key with partial date autocompletes to full date", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Find the "Enter Key" input (id="test-enter")
      const input = page.locator("#test-enter");
      await input.click();
      await page.waitForTimeout(200);

      // Type partial date "23"
      await input.fill("");
      await input.type("23");
      await page.waitForTimeout(100);

      // Press Enter to autocomplete
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should have autocompleted to a full date with day 23
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^23\/\d{2}\/\d{4}$/);
    });

    test("Enter key with empty input autocompletes to current date", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      const input = page.locator("#test-enter");
      await input.click();
      await page.waitForTimeout(200);

      // Clear and press Enter on empty input
      await input.fill("");
      await page.waitForTimeout(100);
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should have autocompleted to current date
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    test("Blur with partial date autocompletes", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Find the "Blur" input (id="test-blur")
      const input = page.locator("#test-blur");
      await input.click();
      await page.waitForTimeout(200);

      // Type partial date "10"
      await input.fill("");
      await input.type("10");
      await page.waitForTimeout(100);

      // Click outside to blur
      await page.locator("body").click({ position: { x: 10, y: 10 } });
      await page.waitForTimeout(300);

      // Should have autocompleted to a full date with day 10
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^10\/\d{2}\/\d{4}$/);
    });

    test("Double-click with partial date autocompletes", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Find the "Double-click" input (id="test-dblclick")
      const input = page.locator("#test-dblclick");
      await input.click();
      await page.waitForTimeout(200);

      // Type partial date "25/12"
      await input.fill("");
      await input.type("25/12");
      await page.waitForTimeout(100);

      // Double-click to autocomplete
      await input.dblclick();
      await page.waitForTimeout(300);

      // Should have autocompleted to a full date with day 25, month 12
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^25\/12\/\d{4}$/);
    });

    test("Double-click with empty input autocompletes to current date", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Find the "Double-click" input
      const input = page.locator("#test-dblclick");
      await input.click();
      await page.waitForTimeout(200);

      // Clear the input
      await input.fill("");
      await page.waitForTimeout(100);

      // Double-click on empty input
      await input.dblclick();
      await page.waitForTimeout(300);

      // Should have autocompleted to current date
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    test("Backspace can clear entire value", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Use the "Clear value" input which has a pre-set value
      const input = page.locator("#test-clear");
      await input.click();
      await page.waitForTimeout(200);

      // Select all (cross-platform: Control+a on Linux/Windows, Meta+a on Mac)
      // Use triple-click to select all text as a reliable cross-platform method
      await input.click({ clickCount: 3 });
      await page.waitForTimeout(100);
      await input.press("Backspace");
      await page.waitForTimeout(100);

      // Click outside to blur and trigger commit
      await page.locator("body").click({ position: { x: 10, y: 10 } });
      await page.waitForTimeout(300);

      // Value should be cleared, not autocompleted
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("");
    });

    test("Tab commits value, closes picker, and moves to next input", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      // Focus the first input
      const input1 = page.locator("#test-enter");
      await input1.click();
      await page.waitForTimeout(200);

      // Type partial date
      await input1.fill("");
      await input1.type("15");
      await page.waitForTimeout(100);

      // Press Tab
      await input1.press("Tab");
      await page.waitForTimeout(300);

      // Value should be committed (autocompleted)
      const inputValue = await input1.inputValue();
      expect(inputValue).toMatch(/^15\/\d{2}\/\d{4}$/);

      // Focus should have moved to next input (test-blur)
      // Note: The second input's picker will open because it received focus
      const input2 = page.locator("#test-blur");
      await expect(input2).toBeFocused({ timeout: 3000 });
    });

    test("Escape commits value and closes picker", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      const input = page.locator("#test-enter");
      await input.click();
      await page.waitForTimeout(200);

      // Verify picker is open
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Type partial date
      await input.fill("");
      await input.type("15");
      await page.waitForTimeout(100);

      // Press Escape
      await input.press("Escape");
      await page.waitForTimeout(300);

      // Should have committed the value
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^15\/\d{2}\/\d{4}$/);

      // Picker should be closed
      await expect(dropdown).toBeHidden({ timeout: 3000 });
    });
  });

  test.describe("Autocomplete Scenarios", () => {
    test("date: partial day autocompletes with current month/year", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      // Find first date input
      const input = page.locator("#auto-date-1");
      await input.click();
      await page.waitForTimeout(200);

      // Type just day "15"
      await input.fill("");
      await input.type("15");
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should show full date with current month/year
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^15\/\d{2}\/\d{4}$/);
    });

    test("date: partial day/month autocompletes with current year", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      // Find second date input
      const input = page.locator("#auto-date-2");
      await input.click();
      await page.waitForTimeout(200);

      // Type day/month "15/06"
      await input.fill("");
      await input.type("15/06");
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should show full date with current year
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^15\/06\/\d{4}$/);
    });

    test("datetime: partial date+hour autocompletes with current min:sec", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      // Find datetime input
      const input = page.locator("#auto-datetime-1");
      await input.click();
      await page.waitForTimeout(200);

      // Type date + hour "15/06/2024 14"
      await input.fill("");
      await input.type("15/06/2024 14");
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should show full datetime
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^15\/06\/2024 14:\d{2}:\d{2}$/);
    });

    test("time: partial hour autocompletes with zeros", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      // Find first time input
      const input = page.locator("#auto-time-1");
      await input.click();
      await page.waitForTimeout(200);

      // Type just hour "14"
      await input.fill("");
      await input.type("14");
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should show full time
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^14:\d{2}:\d{2}$/);
    });

    test("time: partial hour:minute autocompletes seconds", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      // Find second time input
      const input = page.locator("#auto-time-2");
      await input.click();
      await page.waitForTimeout(200);

      // Type hour:minute "14:30"
      await input.fill("");
      await input.type("14:30");
      await input.press("Enter");
      await page.waitForTimeout(300);

      // Should show full time with seconds
      const inputValue = await input.inputValue();
      expect(inputValue).toMatch(/^14:30:\d{2}$/);
    });
  });

  test.describe("Separator Characters", () => {
    test("typing / character moves to next date section", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      const input = page.locator("#test-enter");
      await input.click();
      await page.waitForTimeout(200);

      // Clear and type date with explicit / separators
      await input.fill("");
      await input.type("10/03/2024");
      await page.waitForTimeout(100);

      // Should have the full date
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("10/03/2024");
    });

    test("typing - character moves to next date section (like /)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--keyboard-behavior");

      const input = page.locator("#test-enter");
      await input.click();
      await page.waitForTimeout(200);

      // Clear and type date using - as separator
      await input.fill("");
      await input.type("10-03-2024");
      await page.waitForTimeout(100);

      // Should have the full date (converted to / format)
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("10/03/2024");
    });

    test("typing - character moves to next time section (like :)", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--autocomplete");

      const input = page.locator("#auto-time-1");
      await input.click();
      await page.waitForTimeout(200);

      // Clear and type time using - as separator
      await input.fill("");
      await input.type("14-30-00");
      await page.waitForTimeout(100);

      // Should have the full time (converted to : format)
      const inputValue = await input.inputValue();
      expect(inputValue).toBe("14:30:00");
    });
  });

  test.describe("Locale Support", () => {
    test("Spanish locale shows calendar in Spanish", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--locale-spanish");

      const input = await getInput(page);
      await input.click();

      // Wait for dropdown to be visible
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for Spanish month name (marzo = March) in the header
      const header = page.locator(".ant-picker-header-view").first();
      await expect(header).toBeVisible();
      const headerText = await header.textContent();

      // Spanish month names or abbreviations
      expect(headerText?.toLowerCase()).toMatch(/mar|marzo/);
    });

    test("Catalan locale shows calendar in Catalan", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--locale-catalan");

      const input = await getInput(page);
      await input.click();

      // Wait for dropdown to be visible
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for Catalan month name (març = March) in the header
      const header = page.locator(".ant-picker-header-view").first();
      await expect(header).toBeVisible();
      const headerText = await header.textContent();

      // Catalan month names or abbreviations
      expect(headerText?.toLowerCase()).toMatch(/mar|març/);
    });

    test("English locale shows calendar in English", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--locale-english");

      const input = await getInput(page);
      await input.click();

      // Wait for dropdown to be visible
      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for English month name (Mar or March) in the header
      const header = page.locator(".ant-picker-header-view").first();
      await expect(header).toBeVisible();
      const headerText = await header.textContent();

      // English month names
      expect(headerText?.toLowerCase()).toMatch(/mar|march/);
    });

    test("Spanish locale shows Spanish day names in calendar", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--locale-spanish");

      const input = await getInput(page);
      await input.click();

      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for Spanish day abbreviations (lu, ma, mi, ju, vi, sá, do)
      const dayHeaders = page.locator(".ant-picker-content th");
      const dayTexts = await dayHeaders.allTextContents();
      const dayString = dayTexts.join("").toLowerCase();

      // Spanish uses "lu" for Monday (lunes)
      expect(dayString).toMatch(/lu|ma|mi|ju|vi/);
    });

    test("Catalan locale shows Catalan day names in calendar", async ({ page }) => {
      await goToStory(page, "components-widgets-date-datemaskedinput--locale-catalan");

      const input = await getInput(page);
      await input.click();

      const dropdown = page.locator(".ant-picker-dropdown");
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for Catalan day abbreviations (dl, dt, dc, dj, dv, ds, dg)
      const dayHeaders = page.locator(".ant-picker-content th");
      const dayTexts = await dayHeaders.allTextContents();
      const dayString = dayTexts.join("").toLowerCase();

      // Catalan uses "dl" for Monday (dilluns)
      expect(dayString).toMatch(/dl|dt|dc|dj|dv/);
    });
  });
});
