import React from "react";
import "./P5Canvas.scss";

import p5 from "p5";

let sketch = function(p) {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(800, 600);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

class P5Canvas extends React.Component {
  componentDidMount() {
    let myp5 = new p5(sketch, "container");
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
