class StartLane {
  constructor(ctx, laneWidth) {
    this.ctx = ctx;
    this.height = 800;
    this.laneWidth = laneWidth;
    this.x = (this.ctx.canvas.width - laneWidth) / 2;
    this.y = -200;
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.laneWidth, this.height);

    if (this.y < this.ctx.canvas.height) {
      this.y += 1;
    }

    // setInterval(this.draw);
    requestAnimationFrame(this.draw);
  }


  
}


export default StartLane;