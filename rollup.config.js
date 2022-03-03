import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import css from "rollup-plugin-import-css";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: "inline",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: "inline",
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    css(),
    resolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: [
          "src/**/*.stories.tsx",
          "src/**/*.argTypes.tsx",
          "src/**/*.test.tsx",
          "src/**/*.test.ts",
          "src/**/*.mock.ts",
        ],
      },
    }),
    terser(),
  ],
};
