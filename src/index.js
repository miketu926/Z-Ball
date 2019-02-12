import Game from './game';
import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  const playerCtx = document.getElementById("player-layer").getContext('2d');
  playerCtx.canvas.width = 500;
  playerCtx.canvas.height = 700;

  let game = new Game(ctx);
  let player = new Player(ctx, game.moveSpeed);

  window.game = game;
  window.pieces = game.pieces;
  window.player = player;
  window.ctx = ctx;
  window.playerCtx = playerCtx;

  ctx.canvas.addEventListener("click", clickHandler);
  // ctx.canvas.addEventListener("keyup", clickHandler); // for spacebar

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


    if (game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[0] == 0 && 
        game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[1] == 0 && 
        game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[2] == 0 ) {
          // alert("game over");
          window.location.reload();
        // cancelAnimationFrame(run);
    } else if (game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
                game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
                game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
          // alert("game over");
          window.location.reload();
      // cancelAnimationFrame(run);
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
                game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
                game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
          // alert("game over");
          window.location.reload();
      // cancelAnimationFrame(run);
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[0] == 0 &&
                game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[1] == 0 &&
                game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[2] == 0) {
          // alert("game over");
          window.location.reload();
      // cancelAnimationFrame(run);
    }
    
    
    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);

});