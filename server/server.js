const express = require("express");
// const bodyParser = require("    ");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/test", function(req, res) {
  console.log("axios got something");
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(process.env.PORT || 8080);
