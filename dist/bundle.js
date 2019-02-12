/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _left_zig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left_zig */ "./src/left_zig.js");
/* harmony import */ var _right_zig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right_zig */ "./src/right_zig.js");
/* harmony import */ var _start_lane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_lane */ "./src/start_lane.js");




class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.moveSpeed = 4;
    this.turn = 'right'; // starts off with right zig, then alternates
    this.pieces = []; // new instances of LeftZig and RightZig gets accumulated
    this.score = 0; // score by action (spacebar or click)
    this.laneWidth = 50;
    this.generateBackground = this.generateBackground.bind(this);
    this.StartLane = new _start_lane__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, this.laneWidth, this.moveSpeed);
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
      this.pieces.push(new _right_zig__WEBPACK_IMPORTED_MODULE_1__["default"](prevX, prevY, laneWidth, ctx, game));
    } else {
      this.pieces.push(new _left_zig__WEBPACK_IMPORTED_MODULE_0__["default"](prevX, prevY, laneWidth, ctx, game));
    }
  }
  
  over() {

  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  const playerCtx = document.getElementById("player-layer").getContext('2d');
  playerCtx.canvas.width = 500;
  playerCtx.canvas.height = 700;

  let game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  let player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, game.moveSpeed);

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

/***/ }),

/***/ "./src/left_zig.js":
/*!*************************!*\
  !*** ./src/left_zig.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  constructor(prevX4, prevY4, laneWidth, ctx, moveSpeed) {
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
    this.YforNextPiece = this.p2y - moveSpeed; // + this.aLane(laneWidth);
    this.moveSpeed = moveSpeed;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.moveTo(this.p1x, this.p1y + this.yMove);
    this.ctx.lineTo(this.p2x, this.p2y + this.yMove);
    this.ctx.lineTo(this.p3x, this.p3y + this.yMove);
    this.ctx.lineTo(this.p4x, this.p4y + this.yMove);
    this.ctx.fill();

    this.yMove += this.moveSpeed;
    this.YforNextPiece += this.moveSpeed;

    requestAnimationFrame(this.draw);
    
  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (LeftZig);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Player {
  constructor(ctx, moveSpeed) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width / 2;
    this.y = this.ctx.canvas.height - 150;
    this.draw = this.draw.bind(this);
    this.radius = 7;
    this.clicked = "none";
    this.moveSpeed = moveSpeed;
    this.a = Math.sqrt((this.radius ** 2) / 2);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();

    // requestAnimationFrame(this.draw);
  }

  moveRight() {
    if (this.x < this.ctx.canvas.width - this.radius) {
      this.x += this.moveSpeed;
    }
  }

  moveLeft() {
    if (this.x > this.radius) {
      this.x -= this.moveSpeed;
    }
  }


}


/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/right_zig.js":
/*!**************************!*\
  !*** ./src/right_zig.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RightZig {
  // prev piece is LeftZig, and start would be from
  // referencing point 2 of that prev piece

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
    return Math.sqrt((laneWidth ** 2) / 2 );
  }

  constructor(prevX2, prevY2, laneWidth, ctx, moveSpeed) {
    this.ctx = ctx;
    this.rA = this.getRandomA();
    this.yMove = 0;  // increment y by all 1 to go down
    this.p1x = prevX2 + this.aLane(laneWidth);
    this.p1y = prevY2 + this.aLane(laneWidth);
    this.p2x = this.p1x - this.aLane(laneWidth);
    this.p2y = this.p1y - this.aLane(laneWidth);
    this.p3x = this.p2x + this.rA;
    this.p3y = this.p2y - this.rA;
    this.p4x = this.p3x + this.aLane(laneWidth);
    this.p4y = this.p3y + this.aLane(laneWidth);
    this.draw = this.draw.bind(this);
    this.YforNextPiece = this.p4y - moveSpeed; //+ this.aLane(laneWidth);
    this.moveSpeed = moveSpeed;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.moveTo(this.p1x, this.p1y + this.yMove);
    this.ctx.lineTo(this.p2x, this.p2y + this.yMove);
    this.ctx.lineTo(this.p3x, this.p3y + this.yMove);
    this.ctx.lineTo(this.p4x, this.p4y + this.yMove);
    this.ctx.fill();

    this.yMove += this.moveSpeed;
    this.YforNextPiece += this.moveSpeed;


    requestAnimationFrame(this.draw);

  }
  
}


/* harmony default export */ __webpack_exports__["default"] = (RightZig);

/***/ }),

/***/ "./src/start_lane.js":
/*!***************************!*\
  !*** ./src/start_lane.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class StartLane {
  constructor(ctx, laneWidth, moveSpeed) {
    this.ctx = ctx;
    this.height = 700;
    this.laneWidth = laneWidth;
    this.x = (this.ctx.canvas.width - laneWidth) / 2;
    this.y = -100;
    this.draw = this.draw.bind(this);
    this.moveSpeed = moveSpeed;
  }

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.laneWidth, this.height);

    if (this.y < this.ctx.canvas.height) {
      this.y += this.moveSpeed;
    }

    // setInterval(this.draw);
    requestAnimationFrame(this.draw);
  }


  
}


/* harmony default export */ __webpack_exports__["default"] = (StartLane);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map