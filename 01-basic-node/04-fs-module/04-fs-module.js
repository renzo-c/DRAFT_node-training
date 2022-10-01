const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const pathFirst = path.resolve(__dirname, "content", "first.txt");
const pathSecond = path.join(__dirname, "content", "subfolder", "second.txt");

const first = readFileSync(pathFirst, "utf8");
const second = readFileSync(pathSecond, "utf8");

console.log({ first, second });

writeFileSync(__dirname + "/content/newFile.txt", "This is a new file");
writeFileSync(pathFirst, "This overwrites the first file");
writeFileSync(pathSecond, " This appends to the current content", { flag: "a" });
