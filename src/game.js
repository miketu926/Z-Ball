import LeftZig from './left_zig';
import RightZig from './right_zig';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.turn = 'right'; // starts off with right zig, then alternates
    this.path = []; // new instances of LeftZig and RightZig gets accumulated
    this.score = 0; // score by action (spacebar or click)
    this.laneWidth = 50;
  }

  generateBackground() {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  
  generateZigZag(prevX, prevY) {
    if (this.turn === 'right') {
      this.turn = 'left';
      return new RightZig(prevX, prevY, this.laneWidth);
    } else {
      this.turn = 'right';
      return new LeftZig(prevX, prevY, this.laneWidth);
    }
  }

  drawStartLine() {
    this.ctx.fillStyle = 'green';

    let rect = {
      height: 200,
      width: this.laneWidth, // will this have ref issues?
      x: (this.ctx.canvas.width - this.laneWidth) / 2, // will this have ref issues?
      y: -300,
    };

    this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  }

  drawZigZag (zig) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(zig.p1x, zig.p1y + zig.yMove);
    ctx.lineTo(zig.p2x, zig.p2y + zig.yMove);
    ctx.lineTo(zig.p3x, zig.p3y + zig.yMove);
    ctx.lineTo(zig.p4x, zig.p4y + zig.yMove);
    ctx.fill();
  }



}


export default Game;