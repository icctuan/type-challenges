import { defineConfig } from "rollup";
import resolve from "rollup-plugin-node-resolve"; // 提供解析import引入第三方依赖支持（node_modules里的文件）
// import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default defineConfig([
  // {
  //   input: "./src/index.ts",
  //   output: [
  //     {
  //       file: "dist/bundle.cjs",
  //       format: "umd",
  //       name: "ToolBundle",
  //     },
  //     {
  //       file: "dist/bundle.mjs",
  //       format: "esm",
  //     },
  //     {
  //       file: "dist/bundle.js",
  //       format: "cjs",
  //       // sourcemap: true,
  //     },
  //   ],
  //   watch: {
  //     exclude: "node_modules/**",
  //   },
  //   plugins: [
  //     resolve(),
  //     typescript({ tsconfig: "./tsconfig.json", declaration: false }),
  //   ],
  // },
  /* 单独生成声明文件 */
  {
    input: "./src/index.d.ts",
    plugins: [dts()],
    output: {
      format: "es",
      file: "dist/myType.d.ts",
    },
  },
]);
