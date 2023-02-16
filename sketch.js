let bird;
const pipes = [];

function setup() {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 480;
  document.body.appendChild(canvas);

  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  const canvas = document.getElementsByTagName('canvas')[0];
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = pipes.length-1; i >= 0; i--) {
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

function keyPressed() {
  if (event.code === 'Space') {
    bird.up();
    console.log("SPACE");
  }
}

class Bird {
  constructor() {
    this.y = height/2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }

  show(ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 16, 0, Math.PI * 2, true);
    ctx.fill();
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

class Pipe {
  constructor() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  show(ctx) {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(this.x, 0, this.w, this.top);
    ctx.fillRect(this.x, height-this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
}
