const express = require("express");
// const bodyParser = require("    ");
const path = require("path");
const app = express();
const port = 5000;
// app.use(express.static(path.join(__dirname, "build")));

app.get("/test", function(req, res) {
  console.log("axios got something");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(process.env.PORT || port, function() {
  console.log("server running on port", port);
});
