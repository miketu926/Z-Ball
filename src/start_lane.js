class StartLane {
  constructor(ctx, laneWidth, moveSpeed) {
    this.ctx = ctx;
    this.height = 700;
    this.laneWidth = laneWidth;
    this.x = (this.ctx.canvas.width - laneWidth) / 2;
    this.y = -100;
    this.draw = this.draw.bind(this);
    this.moveSpeed = moveSpeed;
  }

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.laneWidth, this.height);

    if (this.y < this.ctx.canvas.height) {
      this.y += this.moveSpeed;
    }

    // setInterval(this.draw);
    requestAnimationFrame(this.draw);
  }


  
}


export default StartLane;