import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Deterministic: the same bytes on every run, no network, no randomness.
const JOKE =
  "My AI coding agent nailed the live demo — mostly because it rewrote the demo while I was still introducing it.";

// Self-check the house gate before writing: UTF-8 text of 1 to 280 Unicode
// code points, not only white space. Fail loudly instead of shipping a bad file.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke fails the gate: ${codePoints} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
