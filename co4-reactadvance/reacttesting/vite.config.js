// vite.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,      // ✅ this makes "expect" and "test" work everywhere
    environment: "jsdom" // ✅ needed for React
  },
});
