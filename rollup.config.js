import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import resolve from "rollup-plugin-node-resolve"; // 提供解析import引入第三方依赖支持（node_modules里的文件）
import typescript from "@rollup/plugin-typescript";

// import babel from "@rollup/plugin-babel";

export default defineConfig([
  {
    // 核心选项
    input: "./src/index.ts", // 打包入口
    external: [], // 指出应该将哪些模块看做外部模块，不和我们的源码包打在一起，该参数接收数组或者参数为模块名称的函数，返回true则将被看做外部引入不打包在一起
    plugins: [
      resolve(),
      typescript({ tsconfig: "./tsconfig.json", declaration: false }),
    ],

    // 额外选项
    // onwarn:

    // 打包出口
    output: [
      {
        file: "dist/bundle.cjs", // 最终打包出来的文件路径和文件名
        format: "umd", // 必填，umd是兼容amd/cjs/iife的通用打包格式，适合浏览器，不设置该选项导出代码无法执行（无法识别export）
        name: "ToolBundle", // 导出的文件名称
      },
      {
        file: "dist/bundle.mjs",
        format: "esm",
      },
      {
        file: "dist/bundle.js",
        format: "cjs",
        // sourcemap: true,
      },
    ],
    watch: {
      exclude: "node_modules/**",
    },
  },
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
