import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "You fell asleep mid-sentence, cheek on a shoulder, one hand still holding on to a sleeve. " +
  "Nobody has moved since. " +
  "The room has agreed to be quiet around you. " +
  "The sentence can finish itself tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
