import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./SelectionInput.stories";

const { Basic } = composeStories(stories);

describe("SelectionInput", () => {
  const testCases = Object.values(composeStories(stories)).map((Story) => [
    Story.storyName!,
    Story,
  ]);

  test.each(testCases)("Renders %s story", async (_storyName, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  });

  it("renders basic", () => {
    render(<Basic />);
    expect(true).toBe(true); // TODO: test something
  });
});
