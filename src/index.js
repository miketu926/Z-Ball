import Game from './game';
import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  const canvas = document.getElementById("background-layer");

  let game = new Game(ctx);
  let player = new Player(ctx, document);

  window.game = game;
  window.pieces = game.pieces;
  window.player = player;

  canvas.addEventListener("click", clickHandler);

  function clickHandler() {
    if (player.clicked === "right") {
      player.clicked = "left";
    } else {
      player.clicked = "right";
    }
  }
  game.generateBackground();
  game.StartLane.draw();

  game.generateZigZag(game.prevX, game.prevY, game.laneWidth, game.ctx);
  game.pieces.slice(-1)[0].draw();

  
  function runGame() {
    if (game.turn === 'right' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      game.turn = 'left';
      game.generateZigZag(game.pieces.slice(-1)[0].p4x, game.pieces.slice(-1)[0].YforNextPiece, game.laneWidth, game.ctx);
      game.pieces.slice(-1)[0].draw();
    } else if (game.turn === 'left' && game.pieces.slice(-1)[0].YforNextPiece > 0 ) {
      game.turn = 'right';
      game.generateZigZag(game.pieces.slice(-1)[0].p2x, game.pieces.slice(-1)[0].YforNextPiece, game.laneWidth, game.ctx);
      game.pieces.slice(-1)[0].draw();
    }

    player.draw();

    if (game.pieces.length > 30) {
      game.pieces.shift();
    }

    if (player.clicked === "none") {
    } else if (player.clicked === "right") {
      player.moveRight();
    } else {
      player.moveLeft();
    }
    
    requestAnimationFrame(runGame);
  }

  // function unclickHandler(e) {
  //   if (e.key == 'click') {
  //     player.clicked = false;
  //   }
  // }

  requestAnimationFrame(runGame);
  // setInterval(runGame, 2000);

});