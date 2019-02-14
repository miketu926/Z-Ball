import Game from './game';
import Player from './player';
import { fetchScores, postScore, generateHighScoreForm } from './util';

  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  fetchScores().then(scores => {
    var nameUL = document.getElementById('high-score-name');
    var scoreUL = document.getElementById('high-score-score');
    var scoreboard = [];
    scoreboard.push(Object.entries(scores));

    // sort by decdending scores
    function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
        return 0;
      }
      else {
        return (a[1] > b[1]) ? -1 : 1;
      }
    }
    scoreboard[0].sort(compareSecondColumn);
    // end sort

    scoreboard[0].forEach( (el, idx) => {
      if (idx < 5) {
        var nameList = document.createElement("LI");
        var scoreList = document.createElement("LI");
        nameList.className = 'list-item';
        scoreList.className = 'list-item';
        var name = document.createTextNode(el[0]);
        var score = document.createTextNode(el[1]);
        nameList.appendChild(name);
        nameUL.appendChild(nameList);
        scoreList.appendChild(score);
        scoreUL.appendChild(scoreList);
      } else {
        return;
      }
    });
  });

  let game = new Game(ctx);
  let player = new Player(ctx, game.moveSpeed);

  ctx.canvas.addEventListener("click", clickHandler);
  window.addEventListener("keyup", clickHandler);

  function clickHandler(e) {
    if (e.keyCode === 32 || e.type === 'click') {
      if (player.clicked === "right") {
        player.clicked = "left";
        game.score += 1;
      } else {
        player.clicked = "right";
        game.score += 1;
      }
    }
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

    //BALL TRAIL
    // player.storeLastPosition(player.x, player.y + player.a);

    // for (let i = 0; i < player.trails.length; i++) {
    //   if (player.clicked === 'none') {
    //     game.ctx.beginPath();
    //     game.ctx.arc(player.trails[i].x, player.trails[i].y, player.radius, 0, Math.PI * 2);
    //     game.ctx.fillStyle = player.color;
    //     game.ctx.fill(); 
    //   } else if (player.clicked === 'right') {
    //     game.ctx.beginPath();
    //     game.ctx.arc(player.trails[i].x, player.trails[i].y + player.trails[i].dY, player.radius, 0, Math.PI * 2);
    //     game.ctx.fillStyle = player.color;
    //     game.ctx.fill();
    //     player.trails[i].dY += player.moveSpeed;
    //   } else if (player.clicked === 'left') {
    //     game.ctx.beginPath();
    //     game.ctx.arc(player.trails[i].x + player.trails[i].dY, player.trails[i].y + player.trails[i].dY, player.radius, 0, Math.PI * 2);
    //     game.ctx.fillStyle = player.color;
    //     game.ctx.fill();
    //     player.trails[i].dY += player.moveSpeed;
    //   }
    // }
    // END BALL TRAIL

    game.ctx.font = '40px Arial';
    game.ctx.fillStyle = "white";
    game.ctx.textAlign = "center";
    game.ctx.fillText(`${game.score}`, game.ctx.canvas.width / 2, 40);
    
    if (game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[0] == 0 && 
        game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[1] == 0 && 
        game.ctx.getImageData(player.x + player.a - 1, player.y - player.a - 1, 1, 1).data[2] == 0 ) {
      cancelAnimationFrame(runGame);
      window.location.reload();
    } else if (game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
      cancelAnimationFrame(runGame);
      window.location.reload();
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
      cancelAnimationFrame(runGame);
      window.location.reload();
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[2] == 0) {
      cancelAnimationFrame(runGame);
      window.location.reload();
    }



    requestAnimationFrame(runGame);
  }

  requestAnimationFrame(runGame);