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



class Game {

  drawZigZag () {
    
  }
  
  constructor(ctx) {
    this.ctx = ctx;
    this.LeftZig = [];
    this.RightZig = [];
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
/* harmony import */ var _right_zig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right_zig */ "./src/right_zig.js");
/* harmony import */ var _left_zig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left_zig */ "./src/left_zig.js");




document.addEventListener("DOMContentLoaded", () => {

  // window.background = background;
  // background();

  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;
  let canvasWidth = ctx.canvas.width;
  let canvasHeight = ctx.canvas.height;
  let laneWidth = 50;

  // ctx.fillStyle = 'lightblue';
  // ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  let pathXStart = (canvasWidth - 50) / 2;
  
  // initial lane start
  let rectangle = {
    height: 200,
    width: 50,
    x: pathXStart,
    y: -300,
  };

  // const a = Math.sqrt(2500 / 2); // ~35.35 for a 50 width lane

  // const getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // const getRandomA = () => {
  //   let randomLength = getRandomInt(100, 200);
  //   return Math.sqrt( (randomLength**2) / 2);
  // };

  // // rightZig
  // let rightZig = {
  //   rA: getRandomA(),
  //   p1x: pathXStart,
  //   p1y: 0,
  //   p2x: pathXStart + a,
  //   p2y: a,
  //   get p3x() { return pathXStart + a + this.rA; },
  //   get p3y() { return a - this.rA; },
  //   get p4x() { return pathXStart + this.rA; },
  //   get p4y() { return - this.rA; },
  //   x: 0,
  // };

  // RUNNNNNNNNN!!!!
  const path = () => {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    ctx.fillStyle = "green";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    
    if (rectangle.y < 700) {
      rectangle.y += 1; // until it ends
    }

    let rightZig = new _right_zig__WEBPACK_IMPORTED_MODULE_1__["default"](rectangle.x, rectangle.y, laneWidth);

    // add additional random right zig zag
    ctx.beginPath();
    ctx.fillStyle = "green";
    // let rA = getRandomA();
    // let pos = pathXStart;
    // let x = 0;
    // ctx.moveTo(pos + x, 0 + x);
    // ctx.lineTo(pos + a + x, a + x);
    // ctx.lineTo(pos + a + rA + x, a - rA + x);
    // ctx.lineTo(pos + rA + x, a - rA - a + x);
    ctx.moveTo(rightZig.p1x, rightZig.p1y + rightZig.yMove);
    // debugger
    ctx.lineTo(rightZig.p2x, rightZig.p2y + rightZig.yMove);
    ctx.lineTo(rightZig.p3x, rightZig.p3y + rightZig.yMove);
    ctx.lineTo(rightZig.p4x, rightZig.p4y + rightZig.yMove);
    ctx.fill();

    if (rectangle.y >= 0 ) {
      rightZig.yMove += 1;
    }

    

    // add additional random left zig zag

    // if (rectangle.y > 700) {
    //   rectangle.y = -rectangle.height;
    // }

  };

// requestAnimationFrame(path);
setInterval(path, 1);
  
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

  constructor(prevX4, prevY4, laneWidth) {
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
  }
}


/* harmony default export */ __webpack_exports__["default"] = (LeftZig);

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

  constructor(prevX2, prevY2, laneWidth) {
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
  }
}


/* harmony default export */ __webpack_exports__["default"] = (RightZig);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map