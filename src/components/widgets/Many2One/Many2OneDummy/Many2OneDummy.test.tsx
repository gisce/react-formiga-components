import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Many2OneDummy.stories";
import matchMediaMock from "@/mocks/matchMedia.mock";

describe("Many2OneDummy", () => {
  beforeAll(() => {
    matchMediaMock();
  });

  const testCases = Object.values(composeStories(stories)).map((Story) => [
    Story.storyName!,
    Story,
  ]);

  test.each(testCases)("Renders %s story", async (_storyName, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  });
});
