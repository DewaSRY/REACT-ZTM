/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },

  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup.ts"],
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@common": fileURLToPath(new URL("./src/common/", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
      "@feature": fileURLToPath(new URL("./src/feature/", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils/", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages/", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components/", import.meta.url)
      ),
      "@style": fileURLToPath(new URL("./src/style/", import.meta.url)),
    },
  },
});
