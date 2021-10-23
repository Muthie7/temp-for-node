//PATH Module
const path = require("path");

//1..platform specific path separator
console.log(path.sep);

//2.. get files path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//3..basename..last file on the path
const base = path.basename(filePath);
console.log(base);

//4..get absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
