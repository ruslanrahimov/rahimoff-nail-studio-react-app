import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { existsSync, readdirSync, readFileSync } from "node:fs";

// Keep /blog out of the sitemap until at least one non-draft post exists.
const blogDir = "./src/content/blog";
const hasPublishedPosts =
  existsSync(blogDir) &&
  readdirSync(blogDir).some(
    (f) => /\.mdx?$/.test(f) && !/^draft:\s*true/m.test(readFileSync(`${blogDir}/${f}`, "utf8")),
  );

// TODO: confirm the production domain before cutover.
const SITE = process.env.PUBLIC_SITE_URL || "https://rahimoff.com.tr";

export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), mdx(), sitemap({
      filter: (page) => !page.endsWith("/404") && (hasPublishedPosts || !page.includes("/blog")),
    })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Existing components import from "react-router"; map to the static-site shim.
        "react-router": fileURLToPath(new URL("./src/lib/router.jsx", import.meta.url)),
      },
    },
  },
});
