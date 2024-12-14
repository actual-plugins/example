import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "src/index.tsx"
      ),
      name: "Shared",
      formats: ["es", "cjs"],
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
});
