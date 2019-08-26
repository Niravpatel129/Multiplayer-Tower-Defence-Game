let sketch = function(p) {
  let x = 100;
  let y = 100;
  let speed = 10;
  var checkIfMouseDown = () => {
    if (p.keyIsDown(37)) {
      x -= speed;
    }
    if (p.keyIsDown(38)) {
      y -= speed;
    }
    if (p.keyIsDown(39)) {
      x += speed;
    }
    if (p.keyIsDown(40)) {
      y += speed;
    }
  };

  p.setup = function() {
    p.createCanvas(800, 600);
  };

  p.draw = function() {
    //checker functions
    checkIfMouseDown();
    //drawing function calls
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };

  p.mouseClicked = function() {
    console.log("mouse was clicked");
  };

  p.keyPressed = function() {
    console.log("key pressed!", p.keyCode);
  };
};

export default sketch;
