import "antd/dist/antd.css";
import "./tailwind.css";

window.global = window;
window.Buffer = window.Buffer || require("buffer").Buffer;

import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";

export const decorators = [
  withTests({
    results,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
