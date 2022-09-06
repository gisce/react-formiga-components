import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({ preferBuiltins: true }),
    commonjs(),
    terser(),
  ],
  build: {
    sourcemap: "inline",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-formiga-components",
      formats: ["es", "umd"],
      fileName: (format) => `react-formiga-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
