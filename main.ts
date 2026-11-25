// Famous Last Words: The Funniest Epitaph
// Program ini menulis satu epitaph satu baris (116 karakter, tanpa newline
// di akhir) ke /output/entry.txt: kata-kata terakhir yang menagih utang
// Dave $40 plus bunga sejak 2019.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell the kids I love them. Tell the bank I never will. And tell Dave he still owes me $40, plus interest since 2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
