const http = require("http");
const { listener } = require("./listener");
const { Log } = require("./logger");

const server = http.createServer(listener);

server.listen(10235, () => {
  Log.info("listen to http://127.0.0.1:10235");
});