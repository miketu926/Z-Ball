import Game from './game';
import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  const canvas = document.getElementById("background-layer");

  let game = new Game(ctx);
  let player = new Player(ctx, game.moveSpeed);

  window.game = game;
  window.pieces = game.pieces;
  window.player = player;

  canvas.addEventListener("click", clickHandler);
  canvas.addEventListener("keyup", clickHandler);

  function clickHandler(e) {
    // if (e.keyCode == 32 || e.type === 'click') {  to implement for spacebar
      if (player.clicked === "right") {
        player.clicked = "left";
      } else {
        player.clicked = "right";
      }
    // }
  }
  game.generateBackground();
  game.StartLane.draw();

  game.generateZigZag(game.prevX, game.prevY, game.laneWidth, game.ctx, game.moveSpeed);
  game.pieces.slice(-1)[0].draw();
  
  
  function runGame() {
    player.draw();
    if (game.turn === 'right' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      game.turn = 'left';
      game.generateZigZag(game.pieces.slice(-1)[0].p4x, game.pieces.slice(-1)[0].YforNextPiece, game.laneWidth, game.ctx, game.moveSpeed);
      game.pieces.slice(-1)[0].draw();
    } else if (game.turn === 'left' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      game.turn = 'right';
      game.generateZigZag(game.pieces.slice(-1)[0].p2x, game.pieces.slice(-1)[0].YforNextPiece, game.laneWidth, game.ctx, game.moveSpeed);
      game.pieces.slice(-1)[0].draw();
    }
    
    if (game.pieces.length > 30) {
      game.pieces.shift();
    }
    
    if (player.clicked === "none") {
    } else if (player.clicked === "right") {
      player.moveRight();
    } else {
      player.moveLeft();
    }

    // falling off detection
    
    
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);

});