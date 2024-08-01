import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/react.ts"],
  dts: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  minify: process.env.NODE_ENV === "production",
});
