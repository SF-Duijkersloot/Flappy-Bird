var bird;
var pipes = [];
var score = 0;

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
      score = 0;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score++;
    }
  }

  bird.update();
  bird.show();

  fill(255);
  textSize(32);
  text("Score: " + score, 10, 30);

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
