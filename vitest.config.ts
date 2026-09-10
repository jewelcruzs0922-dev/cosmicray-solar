import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    exclude: ["tests/e2e.spec.ts", "tests/**/*.spec.ts", "node_modules/**"],
    include: ["tests/**/*.test.ts", "src/__tests__/**/*.test.tsx"],
  },
});
