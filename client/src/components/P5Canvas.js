import React from "react";
import "./P5Canvas.scss";

import p5 from "p5";
import sketch from "./utilities/setup";

class P5Canvas extends React.Component {
  componentDidMount() {
    new p5(sketch, "container"); // create a new p5 instance
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
