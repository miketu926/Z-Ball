class Player {
  constructor(ctx, moveSpeed) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 150;
    this.draw = this.draw.bind(this);
    this.radius = 7;
    this.clicked = "none";
    this.moveSpeed = moveSpeed;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();

    // requestAnimationFrame(this.draw);
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