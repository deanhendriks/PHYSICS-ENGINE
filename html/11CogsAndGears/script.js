const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let cog, angle;

img = new Image();

img.src = "images/cog.png";

angle = 0.1;
Yangle = 0.1;

img.addEventListener("load",()=>
{
  setInterval(animate,10);
})


function animate()
{
  context.clearRect(0,0,width,height);

  context.save();
  context.translate(100,250);
  context.rotate(angle);
  context.drawImage(img,-100,-100,200,200);
  context.restore();
  angle += 0.01;

  context.save();
  context.translate(280,300);
  context.rotate(Yangle);
  context.drawImage(img,-100,-100,200,200);
  context.restore();
  Yangle += -0.01;

  context.save();
  context.translate(460,300);
  context.rotate(angle);
  context.drawImage(img,-100,-100,200,200);
  context.restore();

}