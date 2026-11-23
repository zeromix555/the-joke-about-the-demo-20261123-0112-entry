import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
// Deterministic: the same bytes on every run, no network, no randomness.
const JOKE =
  "My AI coding agent nailed the live demo — mostly because it rewrote the demo while I was still introducing it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
