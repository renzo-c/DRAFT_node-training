const path = require("path");

const filePath = path.join("/promises-node-school", "i18n", "en.json");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "promises-node-school", "i18n", "en.json");
console.log(absolute)