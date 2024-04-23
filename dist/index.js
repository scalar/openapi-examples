const e = {}, l = /* @__PURE__ */ Object.assign({ "./files/bbccouk.yaml": () => import("./bbccouk-Tu5ROMtu.js"), "./files/mega.yaml": () => import("./mega-vCndbi4b.js"), "./files/webflowcom.yaml": () => import("./webflowcom-9aj0l9Oq.js") }), o = e.readFileSync(
  e.resolve(__dirname, "./files/mega.yaml"),
  "utf-8"
), c = e.readFileSync(
  e.resolve(__dirname, "./files/bbccouk.yaml"),
  "utf-8"
), m = e.readFileSync(
  e.resolve(__dirname, "./files/webflowcom.yaml"),
  "utf-8"
);
export {
  c as bbccouk,
  l as files,
  o as mega,
  m as webflowcom
};
