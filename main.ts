import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill: the single scariest sentence, under 200 characters.
const ENTRY =
  "The baby monitor whispered my name in my wife's voice — she died three years ago, and the monitor was never plugged in.";
const OUTPUT_PATH = "/output/entry.txt";

// Kit gate: 1–200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || /\n/.test(ENTRY) || !ENTRY.trim()) {
  throw new Error(`entry fails the kit gate at ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
