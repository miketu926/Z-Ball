// import { path } from './path';

export const background = () => {

  const background = document.getElementById("background-layer");
  let canvasWidth = 500;
  let canvasHeight = 700;
  background.width = canvasWidth;
  background.height = canvasHeight;

  const backgroundCtx = background.getContext('2d');
  
  backgroundCtx.fillStyle = 'lightblue';
  backgroundCtx.fillRect(0, 0, canvasWidth, canvasHeight);

  let pathXStart = (canvasWidth - 50) / 2;
  // let pathYStart = 0;
  // let dX = 1;
  // let dY = 1;
  // let nextXStart = pathXStart;
  // let nextYStart = pathYStart;


  // path(backgroundCtx, pathXStart, pathYStart);

  let rectangle = {
    height: 50,
    width: 50,
    x: pathXStart,
    y: 0
  };



  const path = () => {
    rectangle.y += 1;

    backgroundCtx.fillStyle = "blue";
    backgroundCtx.fillRect(0, 0, canvasWidth, canvasHeight);
    backgroundCtx.fillStyle = "green";
    backgroundCtx.beginPath();
    backgroundCtx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

    if (rectangle.y > 700) {
      rectangle.y = -rectangle.height;
    }

    window.requestAnimationFrame(loop);

  };

  // draw( path(backgroundCtx, pathXStart, pathYStart) );

  // backgroundCtx.beginPath();
  // backgroundCtx.moveTo(220, 20);
  // backgroundCtx.lineTo(320, 20);
  // backgroundCtx.lineTo(320, 720);
  // backgroundCtx.lineTo(220, 720);
  // backgroundCtx.fill();
};


