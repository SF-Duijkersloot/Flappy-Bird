var bird;
var pipes = [];

function setup() {
  var canvas = document.getElementById("canvas");
  canvas.width = 640;
  canvas.height = 480;

  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 === 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (event.key === ' ') {
    bird.up();
    console.log("SPACE");
  }
}
