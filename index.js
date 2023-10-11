const http = require("http");
// crear servidor 

const servidor = http.createServer((req, res) => {
   res.end("desde node");
});

const PORT = 3000;

