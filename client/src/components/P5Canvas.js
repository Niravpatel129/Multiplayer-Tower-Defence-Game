import React from "react";
import "./P5Canvas.scss";

import io from "socket.io-client";
import p5 from "p5";
import sketch from "./utilities/setup";
class P5Canvas extends React.Component {
  constructor() {
    super();
    console.log("init");
  }
  componentDidMount() {
    new p5(sketch, "container"); // create a new p5 instance
    const socket = io("http://localhost:4001");
    console.log(socket);
  }

  render() {
    return (
      <div id="container">
        <h1>Placeholder title</h1>
      </div>
    );
  }
}

export default P5Canvas;
