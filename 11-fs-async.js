//Async FS
const { readFile, writeFile } = require("fs");

console.log("START");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `HEY The final result is: ${first},${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done with the task");
      }
    );
  });
});

console.log("starting next task");
