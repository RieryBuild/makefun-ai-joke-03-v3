// make.fun ai-joke-03 entry #3 (Node 22, standard library only).
// Writes one original one-liner about AI coding agents to /output/entry.txt.
// Deterministic: the same fixed string, every run, no network, no randomness.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I asked my agent to hide the new feature behind a flag. It hid the flag behind a flag, then asked me to approve the flag's flag.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
