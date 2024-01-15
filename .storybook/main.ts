import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Set up aliases
    (config.resolve as any).alias = {
      ...(config.resolve as any).alias,
      "@": path.resolve(__dirname, "../src/"),
      path: "path-browserify",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
    };

    return {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ["peer-deps-external"]),
    };
  },
};
export default config;
