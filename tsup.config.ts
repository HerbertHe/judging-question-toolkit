import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts"],
    clean: true,
    dts: true,
    format: ["esm", "cjs"],
    outDir: "dist",
})
