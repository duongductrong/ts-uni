import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/array.ts", "./src/object.ts"],
  dts: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  minify: process.env.NODE_ENV === "production",
});
