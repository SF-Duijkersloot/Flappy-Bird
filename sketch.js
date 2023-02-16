window.onload = function() {
  let bird;
  let pipes = [];

  function setup() {
    let canvas = document.getElementById('canvas');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    createCanvas(width, height);
    bird = new Bird();
    pipes.push(new Pipe());
  }

  function draw() {
    background(0);

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
        console.log('HIT');
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
      pipes.push(new Pipe());
    }
  }

  function keyPressed() {
    if (key == ' ') {
      bird.up();
      console.log('SPACE');
    }
  }

  let p5instance = new p5(function(p) {
    p.setup = setup;
    p.draw = draw;
    p.keyPressed = keyPressed;
  }, 'canvas');
};


function keyPressed() {
  if (event.code === 'Space') {
    bird.up();
    console.log("SPACE");
  }
}
