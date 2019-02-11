import LeftZig from './left_zig';
import RightZig from './right_zig';

class Game {

  drawZigZag (zig) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(zig.p1x, zig.p1y + zig.yMove);
    ctx.lineTo(zig.p2x, zig.p2y + zig.yMove);
    ctx.lineTo(zig.p3x, zig.p3y + zig.yMove);
    ctx.lineTo(zig.p4x, zig.p4y + zig.yMove);
    ctx.fill();
  }
  
  constructor(ctx) {
    this.ctx = ctx;
    this.LeftZig = [];
    this.RightZig = [];
  }


}


export default Game;