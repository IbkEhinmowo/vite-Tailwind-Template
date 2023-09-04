import reactRefresh from "@vitejs/plugin-react-refresh";
import tsConfigPath from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [reactRefresh(), tsConfigPath(), WindiCSS()],
  base: "./"
});
