class Player {
  constructor(ctx, document) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 150;
    this.draw = this.draw.bind(this);
    this.radius = 10;
    this.document = document;
    this.clicked = "none";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#000000";
    this.ctx.fill();
    this.ctx.closePath();

    // requestAnimationFrame(this.draw);
  }

  moveRight() {
    this.x += 1;
  }

  moveLeft() {
    this.x -= 1;
  }


}


export default Player;