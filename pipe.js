function Pipe() {
  this.spacing = 175;
  this.top = Math.random() * (window.innerHeight / 6 - 3 / 4 * window.innerHeight) + 3 / 4 * window.innerHeight;
  this.bottom = window.innerHeight - (this.top + this.spacing);
  this.x = window.innerWidth;
  this.w = 80;
  this.speed = 6;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > window.innerHeight - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  };

  this.show = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    if (this.highlight) {
      ctx.fillStyle = 'red';
    }
    ctx.fillRect(this.x, 0, this.w, this.top);
    ctx.fillRect(this.x, window.innerHeight - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
