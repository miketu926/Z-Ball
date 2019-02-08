import { background } from './game';

document.addEventListener("DOMContentLoaded", () => {

  // window.background = background;
  // background();

  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;
  let canvasWidth = ctx.canvas.width;
  let canvasHeight = ctx.canvas.height;

  // ctx.fillStyle = 'lightblue';
  // ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  let pathXStart = (canvasWidth - 50) / 2;

  let rectangle = {
    height: 1000,
    width: 50,
    x: pathXStart,
    y: -200,
  };

  let piece1 = {
    // backgroundCtx.beginPath();
    // backgroundCtx.moveTo(220, 20);
    // backgroundCtx.lineTo(320, 20);
    // backgroundCtx.lineTo(320, 720);
    // backgroundCtx.lineTo(220, 720);
    // backgroundCtx.fill();
    // x: 
    
  };

  const path = () => {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    ctx.fillStyle = "green";
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    
    rectangle.y += 1; // until it ends.

    if (rectangle.y > 700) {
      rectangle.y = -rectangle.height;
    }


    
  };


setInterval(path, 1);
  
});