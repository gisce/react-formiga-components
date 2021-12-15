import React from "react";
import { render } from "@testing-library/react";

import { BooleanInput } from "./BooleanInput";
import { BaseFieldProps } from "index";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./BooleanInput.stories";

describe("BooleanInput", () => {
  const testCases = Object.values(composeStories(stories)).map((Story) => [
    Story.storyName!,
    Story,
  ]);

  test.each(testCases)("Renders %s story", async (_storyName, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  });

  const renderComponent = ({
    readOnly,
    required,
    value,
    onChange,
  }: Partial<BaseFieldProps<boolean>>) =>
    render(
      <BooleanInput
        required={required}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
    );

  it("should render a checkbox correctly", () => {
    const { getByTestId } = renderComponent({});
    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).not.toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");

    const checkbox_container = getByTestId("checkbox_container");
    const innerSpan = checkbox_container.querySelector(".ant-checkbox-inner");
    expect(innerSpan).not.toHaveStyle("background-color: #dbeafe;");
  });

  it("should render a required checkbox correctly", () => {
    const { getByTestId } = renderComponent({
      required: true,
    });

    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).not.toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");

    const checkbox_container = getByTestId("checkbox_container");
    const innerSpan = checkbox_container.querySelector(".ant-checkbox-inner");
    expect(innerSpan).toHaveStyle("background-color: #dbeafe;");
  });

  it("should render a read only checkbox correctly", () => {
    const { getByTestId } = renderComponent({
      readOnly: true,
    });

    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).toBeDisabled();
    expect(testComponent).not.toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");
  });

  it("should render a checkbox checked correctly", () => {
    const { getByTestId } = renderComponent({ value: true });
    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");
  });

  it("should render a checkbox unchecked correctly", () => {
    const { getByTestId } = renderComponent({ value: false });
    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).not.toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");
  });

  it("should render a checkbox unchecked when clicked", () => {
    const onChangeFn = jest.fn();
    const { getByTestId } = renderComponent({ onChange: onChangeFn });
    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).not.toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");

    testComponent.click();
    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onChangeFn).toHaveBeenCalledWith(true);
  });

  it("should render a checkbox checked when clicked", () => {
    const onChangeFn = jest.fn();
    const { getByTestId } = renderComponent({
      value: true,
      onChange: onChangeFn,
    });
    const testComponent = getByTestId("checkbox_input");
    expect(testComponent).not.toBeDisabled();
    expect(testComponent).toBeChecked();
    expect(testComponent).toHaveAttribute("type", "checkbox");

    testComponent.click();
    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onChangeFn).toHaveBeenCalledWith(false);
  });
});
