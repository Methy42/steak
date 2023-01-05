const http = require("http");
const fs = require("fs");
const path = require("path");
const { Log } = require("./logger");

/**
 * @type { http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> }
 */
function listener(req, res) {
  let filePath = req.url;
  Log.info("request", filePath);

  if (!filePath || filePath === "/") {
    filePath = "index.html";
  }

  fs.readFile(path.join(__dirname, "..", "ui", filePath), { encoding: "utf-8" }, (error, data) => {
    if (error) {
      Log.error(error);
      return;
    }
    res.write(data);
    res.end();
  });
};

module.exports = {
  listener
};