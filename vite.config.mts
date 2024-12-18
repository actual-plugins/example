import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";

import manifest from "./src/manifest";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/index.tsx"
      ),
      name: "Shared",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    {
      name: "vite-plugin-generate-manifest",
      closeBundle() {
        const outputPath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "dist",
          "manifest.json"
        );

        writeFileSync(outputPath, JSON.stringify(manifest, null, 2), "utf-8");
        console.log("✅ manifest.json generated in /dist");
      },
    },
  ],
});
