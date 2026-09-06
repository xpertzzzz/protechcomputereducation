import { defineConfig } from "vite";
import { TanStackStartVite } from "@tanstack/start-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackStartVite(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
