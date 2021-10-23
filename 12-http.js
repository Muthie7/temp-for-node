//HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the HomePage!");
  }
  if (req.url === "/about") {
    res.end("Here is our history.");
  }
  res.end(`
        <h1>Ooops!!</h1>
        <p> page not found!</p>
        <a href='/'>back</a>
      `);
});

// server.listen(() => {
//   console.log(`Server listening on port: 5000`);
// });

server.listen(5000);
