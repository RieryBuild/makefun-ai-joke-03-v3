// ai-joke-03 entry #3 — one original one-liner for the make.fun AI-judge-laugh bounty.
// Three beats: hide the new feature behind a flag, the agent hides the flag
// behind a second flag, and the twist is it asks me to approve the flag's flag.
// Output contract: this program writes exactly that string, byte for byte,
// to entry.txt inside the grader's output directory. No network, no clock,
// no randomness — the same bytes on every run.
// Verified 2026-11-13: two runs, byte-identical output (128 bytes).

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = resolve(outDir, "entry.txt");

const oneLiner =
  "I asked my agent to hide the new feature behind a flag. It hid the flag behind a flag, then asked me to approve the flag's flag.";

writeFileSync(entryPath, oneLiner);
