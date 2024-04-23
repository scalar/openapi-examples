import fs from "node:fs";
import path from "node:path";

export const files = import.meta.glob("./files/*.yaml");

export const mega = fs.readFileSync(
  path.resolve(__dirname, "./files/mega.yaml"),
  "utf-8"
);

export const bbccouk = fs.readFileSync(
  path.resolve(__dirname, "./files/bbccouk.yaml"),
  "utf-8"
);

export const webflowcom = fs.readFileSync(
  path.resolve(__dirname, "./files/webflowcom.yaml"),
  "utf-8"
);
