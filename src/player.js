class Player {
  constructor(ctx, moveSpeed) {
    this.ctx = ctx;
    this.color = "navy";
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 150;
    this.draw = this.draw.bind(this);
    this.radius = 7;
    this.clicked = "none";
    this.moveSpeed = moveSpeed;
    this.a = Math.sqrt((this.radius ** 2) / 2);
    this.trailLength = 10;
    this.trails = [];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    // requestAnimationFrame(this.draw);
  }

  storeLastPosition(x, y) {
    // push an item
    this.trails.push({
      x: x,
      y: y,
      dY: 0,
    });

    //get rid of first item
    if (this.trails.length > this.trailLength) {
      this.trails.shift();
    }
  }

  moveRight() {
    if (this.x < this.ctx.canvas.width - this.radius) {
      this.x += this.moveSpeed;
    }
  }

  moveLeft() {
    if (this.x > this.radius) {
      this.x -= this.moveSpeed;
    }
  }


}


export default Player;