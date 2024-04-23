import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  plugins: [
    ViteYaml(),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json"),
    }),
  ],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
});
