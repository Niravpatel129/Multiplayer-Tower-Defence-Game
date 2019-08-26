import React from "react";
import "./P5Canvas.scss";

import io from "socket.io-client";
import p5 from "p5";
import sketch from "./utilities/setup";
var socket;
class P5Canvas extends React.Component {
  constructor() {
    super();
    console.log("init");
  }
  componentDidMount() {
    new p5(sketch, "container"); // create a new p5 instance
    socket = io("http://localhost:4001");
    console.log(socket);

    socket.on("test", () => {
      console.log("should have got something :(");
    });
  }

  render() {
    return (
      <div
        id="container"
        onClick={() => {
          socket.emit("test2");
        }}
      >
        <h1>Placeholder title</h1>
      </div>
    );
  }
}

export default P5Canvas;
