const http = require("http");
let requestListener = require("./callbackFile.js");
const PORT = process.env.PORT || 8080;
const server = http.createServer(requestListener);
server.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
