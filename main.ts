import { mkdirSync, writeFileSync } from "fs";
import { text } from "./text";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
