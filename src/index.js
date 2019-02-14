import Game from './game';
import Player from './player';
import { fetchScores, postScore } from './util';

const ctx = document.getElementById("background-layer").getContext('2d');
ctx.canvas.width = 500;
ctx.canvas.height = 700;
var doc5 = null;
var top5 = [];
var scoreboard = [];
var doc5array = null;
var array = [];

fetchScores().then(scores => {
  var nameUL = document.getElementById('high-score-name');
  var scoreUL = document.getElementById('high-score-score');
  scoreboard.push(Object.entries(scores));
  
  doc5 = scoreboard[0];
  doc5array = Object.entries(doc5);

  doc5array.forEach(el => {
    array.push(el[1][1]);
  });

  array.sort(function(a,b) {
    return b.score - a.score;
  });

  array.forEach((el, idx) => {
    if (idx < 5) {
      var nameList = document.createElement("LI");
      var scoreList = document.createElement("LI");
      nameList.className = 'list-item';
      scoreList.className = 'list-item scores-list';
      var name = document.createTextNode(el.name);
      var score = document.createTextNode(el.score);
      nameList.appendChild(name);
      nameUL.appendChild(nameList);
      scoreList.appendChild(score);
      scoreUL.appendChild(scoreList);
    } else {
      return;
    }
    
  });
}).then(() => {
  doc5 = document.getElementsByClassName('scores-list');
  [0,1,2,3,4].forEach(el => top5.push(parseInt(doc5[el].innerHTML)));
  play();
});

function play() {
  let game = new Game(ctx);
  let player = new Player(ctx, game.moveSpeed);

  // start window test
  window.player = player;
  window.game = game;
  window.top5 = top5;
  window.doc5 = doc5;
  window.fetchScores = fetchScores;
  window.scoreboard = scoreboard;
  window.doc5array = doc5array;
  window.array = array;
  // end window test

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
        // window.location.reload();
        game.over = true;
    } else if (game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x + player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
        // window.location.reload();
        game.over = true;
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y + player.a - 1, 1, 1).data[2] == 0) {
        // window.location.reload();
        game.over = true;
    } else if (game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[0] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[1] == 0 &&
      game.ctx.getImageData(player.x - player.a - 1, player.y - player.a - 1, 1, 1).data[2] == 0) {
        // window.location.reload();
        game.over = true;
    }

    function gameOver() {
      game.ctx.font = '40px Arial';
      game.ctx.fillStyle = "#70adf1";
      game.ctx.textAlign = "center";
      game.ctx.fillText(`${game.score}`, game.ctx.canvas.width / 2, 40);
      
      requestAnimationFrame(gameOver);
    }

    if (game.over === false) {
      requestAnimationFrame(runGame);
      } else { // game.over === true
      requestAnimationFrame(gameOver);
      ctx.canvas.removeEventListener("click", clickHandler);
      window.removeEventListener("keydown", clickHandler);

      if (game.score > top5[4]) {
        var topdiv = document.createElement("div");
        topdiv.className = 'top-score-message flex flex-col font-white';
        let message = document.createTextNode("Top 5 - Enter Name:");
        topdiv.appendChild(message);

        let myForm = document.createElement('FORM');
        myForm.className = 'form';
        myForm.name = 'myForm';
        myForm.method = 'POST';
        myForm.onsubmit = (e) => {
          e.preventDefault();
          postScore(document.getElementById('name').value, game.score).then(() =>{
            window.location.reload();
          });
        };
        
        let inputEl = document.createElement("INPUT");
        inputEl.type = 'TEXT';
        inputEl.name = 'name';
        inputEl.value = '';
        inputEl.id = 'name';
        inputEl.maxLength = "15";

        let submit = document.createElement("INPUT");
        submit.type = 'SUBMIT';
        submit.value = 'WIN';

        
        myForm.appendChild(inputEl);
        myForm.appendChild(submit);
        topdiv.appendChild(myForm);

        document.getElementById('left-side').appendChild(topdiv);
        } else {
          window.location.reload();
        }
      }
    }
    
    requestAnimationFrame(runGame);
  }
