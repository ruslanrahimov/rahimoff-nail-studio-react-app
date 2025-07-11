import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePluginRadar } from "vite-plugin-radar";

const vitePluginRadarConfig = {
  analytics: {
    id: "G-GD8D7W1VVS",
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePluginRadar(vitePluginRadarConfig)],
  base: "/",
});
