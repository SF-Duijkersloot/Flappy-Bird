let bird;
let pipes = [];

function setup() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  document.body.appendChild(canvas);

  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show(ctx);
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show(ctx);

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyDownHandler(event) {
  if (event.key === " ") {
    bird.up();
  }
}

document.addEventListener("keydown", keyDownHandler);
