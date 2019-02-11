import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("background-layer").getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 700;

  let game = new Game(ctx);

  // setInterval(game.generateBackground, 1);
  game.generateBackground();

  // RUNNNNNNNNN!!!!
  // const path = () => {

  //   game.generateBackground();
  //   game.drawStartLine();
    
  //   if (rect.y < 700) {
  //     rect.y += 1; // until it ends
  //   }

  //   // add additional random right zig zag
  //   // ctx.beginPath();
  //   // ctx.fillStyle = "green";
  //   // ctx.moveTo(rightZig.p1x, rightZig.p1y + rightZig.yMove);
  //   // ctx.lineTo(rightZig.p2x, rightZig.p2y + rightZig.yMove);
  //   // ctx.lineTo(rightZig.p3x, rightZig.p3y + rightZig.yMove);
  //   // ctx.lineTo(rightZig.p4x, rightZig.p4y + rightZig.yMove);
  //   // ctx.fill();

  //   if (rectangle.y >= 0 ) {
  //     rightZig.yMove += 1;
  //   }

    

  //   // add additional random left zig zag

  //   // if (rectangle.y > 700) {
  //   //   rectangle.y = -rectangle.height;
  //   // }

  // };

// requestAnimationFrame(path);
// setInterval(path, 1);
  
});