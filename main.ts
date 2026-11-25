import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dirname(fileURLToPath(import.meta.url)), "..", "output");
mkdirSync(outDir, { recursive: true });
// Same bytes on every run, no matter where the script is launched from.
writeFileSync(join(outDir, "entry.txt"), "test: all tests pass now that I fixed the test that was wrong; the code itself remains a mystery", "utf8");
