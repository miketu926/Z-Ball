export const background = () => {

  const background = document.getElementById("background-layer")
  background.width = 520;
  background.height = 720;
  
  const backgroundCtx = background.getContext('2d');
  backgroundCtx.fillStyle = 'blue';
  backgroundCtx.fillRect(20, 20, 500, 700);


  backgroundCtx.fillStyle = 'black';
  backgroundCtx.fillRect(245, 20, 50, 700);


  // path

  // backgroundCtx.beginPath();
  // backgroundCtx.moveTo(220, 20);
  // backgroundCtx.lineTo(320, 20);
  // backgroundCtx.lineTo(320, 720);
  // backgroundCtx.lineTo(220, 720);
  // backgroundCtx.fill();
  
};