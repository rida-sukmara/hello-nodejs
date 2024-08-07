const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js on OpenShift with Pipeline Jenkins and Fix Flow!');
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
