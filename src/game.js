import LeftZig from './left_zig';
import RightZig from './right_zig';
import StartLane from './start_lane';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.moveSpeed = 0;
    this.turn = 'right'; // starts off with right zig, then alternates
    this.pieces = []; // new instances of LeftZig and RightZig gets accumulated
    this.score = 0; // score by action (spacebar or click)
    this.laneWidth = 50;
    this.generateBackground = this.generateBackground.bind(this);
    this.StartLane = new StartLane(this.ctx, this.laneWidth, this.moveSpeed);
    this.prevX = this.StartLane.x;
    this.prevY = this.StartLane.y;
  }

  generateBackground() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    requestAnimationFrame(this.generateBackground);
  }

  generateZigZag(prevX, prevY, laneWidth, ctx, game) {
    if (this.turn === 'right') {
      this.pieces.push(new RightZig(prevX, prevY, laneWidth, ctx, game));
    } else {
      this.pieces.push(new LeftZig(prevX, prevY, laneWidth, ctx, game));
    }
  }
  
  over() {

  }
  
}


export default Game;