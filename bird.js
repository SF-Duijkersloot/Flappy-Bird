function bird() {
    this.y = height/2;
    this.x = 64;
  
    this.gravity = 0.7;
    this.lift = -12;
    this.velocity = 0;
  
    this.show = function() {
      var canvas = document.getElementById("defaultCanvas0");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(this.x, this.y, 16, 0, Math.PI * 2);
      ctx.fill();
    }
  
    this.up = function() {
      this.velocity += this.lift;
    }
  
    this.update = function() {
      this.velocity += this.gravity;
      // this.velocity *= 0.9;
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
  
