import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/react.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  treeshake: true,
  splitting: false,
  clean: true,
  minify: process.env.NODE_ENV === "production",
});
