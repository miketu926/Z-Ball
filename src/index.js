import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  let game = new Game(ctx);

  window.game = game;

  game.generateBackground();
  game.StartLane.draw();

  game.generateZigZag(game.prevX, game.prevY, game.laneWidth, game.ctx);
  game.pieces.slice(-1)[0].draw();

  const runGame = function runGame() {
    if (game.turn === 'right' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      game.turn = 'left';
      game.generateZigZag(game.pieces.slice(-1)[0].p4x, game.pieces.slice(-1)[0].p4y, game.laneWidth, game.ctx);
      game.pieces.slice(-1)[0].draw();
      // debugger
    } else if (game.turn === 'left' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      // debugger
      game.turn = 'right';
      game.generateZigZag(game.pieces.slice(-1)[0].p2x, game.pieces.slice(-1)[0].p2y, game.laneWidth, game.ctx);
      game.pieces.slice(-1)[0].draw();
      // debugger
    }
    

    requestAnimationFrame(runGame);
  }

  // runGame();

  requestAnimationFrame(runGame);
  // setInterval(runGame, 2000);

});