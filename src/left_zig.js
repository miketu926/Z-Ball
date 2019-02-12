class LeftZig {
  // prev piece is RightZig, and start would be from
  // referencing point 4 of that prev piece

  // point 2 of prev piece + a on both start points (x,y)

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomA() {
    let randomLength = this.getRandomInt(100, 200); // length is between 100 and 200
    return Math.sqrt((randomLength ** 2) / 2);
  }

  aLane(laneWidth) {
    return Math.sqrt((laneWidth ** 2) / 2);
  }

  constructor(prevX4, prevY4, laneWidth, ctx) {
    this.ctx = ctx;
    this.rA = this.getRandomA();
    this.yMove = 0; 
    this.p1x = prevX4 - this.aLane(laneWidth);
    this.p1y = prevY4 + this.aLane(laneWidth);
    this.p2x = this.p1x - this.rA;
    this.p2y = this.p1y - this.rA;
    this.p3x = this.p2x + this.aLane(laneWidth);
    this.p3y = this.p2y - this.aLane(laneWidth);
    this.p4x = this.p3x + this.rA;
    this.p4y = this.p3y + this.rA;
    this.draw = this.draw.bind(this);
    this.YforNextPiece = this.p4y + this.aLane(laneWidth);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.moveTo(this.p1x, this.p1y + this.yMove);
    this.ctx.lineTo(this.p2x, this.p2y + this.yMove);
    this.ctx.lineTo(this.p3x, this.p3y + this.yMove);
    this.ctx.lineTo(this.p4x, this.p4y + this.yMove);
    this.ctx.fill();

    this.yMove += 1;
    this.YforNextPiece += 1;

    requestAnimationFrame(this.draw);
    
  }
  
}


export default LeftZig;