//Sync
const { readFileSync, writeFileSync, write } = require("fs");
// const fs = require("fs");
// fs.readFileSync();

//Read from fs
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

//Write to FS
//syntanx, 2 arguments, if file not there node creates the file, 2nd value to pass
// writeFileSync("./path",'string to input);
// {flag: 'a'} used to append

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

//Sync
// const { readFileSync, writeFileSync, write } = require("fs");
// console.log("START");
// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log("done with the task");
// console.log("starting next task");
