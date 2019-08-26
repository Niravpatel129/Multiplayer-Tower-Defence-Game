const express = require("express");
const http = require("http");

// const bodyParser = require("    ");
const path = require("path");
const app = express();
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
const port = process.env.PORT || 5000;
const serverPort = 4001;
server.listen(serverPort, () =>
  console.log("socketio listening on server:", serverPort)
);

app.use(express.static(path.join(__dirname, "build")));

io.on("connection", function(socket) {
  console.log("user connected :D :D :D :D");
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
});

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

app.listen(port, function() {
  console.log("server running on port", port);
});
