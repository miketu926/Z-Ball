import { background } from './game';
import RightZig from './right_zig';
import LeftZig from './left_zig';

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

    let rightZig = new RightZig(rectangle.x, rectangle.y, laneWidth);

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