import { defineConfig } from "rollup";
import resolve from "rollup-plugin-node-resolve";
// import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "dist/bundle.cjs",
      format: "umd",
      name: "ToolBundle",
    },
    {
      file: "dist/bundle.mjs",
      format: "esm",
    },
  ],
  watch: {
    exclude: "node_modules/**",
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: "./tsconfig.json", declaration: false }),
  ],
});
