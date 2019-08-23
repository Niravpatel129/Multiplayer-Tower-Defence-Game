const express = require("express");
// const bodyParser = require("    ");
const path = require("path");
const app = express();
const port = 5000;
// app.use(express.static(path.join(__dirname, "build")));

app.get("/test", function(req, res) {
  console.log("axios got something");
});

app.listen(process.env.PORT || port, function() {
  console.log("server running on port", port);
});
