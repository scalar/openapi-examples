const e = {}, l = e.readFileSync(
  e.resolve(__dirname, "./files/mega.yaml"),
  "utf-8"
), o = e.readFileSync(
  e.resolve(__dirname, "./files/bbccouk.yaml"),
  "utf-8"
), c = e.readFileSync(
  e.resolve(__dirname, "./files/webflowcom.yaml"),
  "utf-8"
);
export {
  o as bbccouk,
  l as mega,
  c as webflowcom
};
