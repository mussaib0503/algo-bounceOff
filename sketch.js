var fixRect,movRect;



function setup() {
createCanvas(1200,800);
 fixRect= createSprite(400, 100, 50, 80);
 fixRect.shapeColor="green";
movRect=createSprite(400,800,80,30);
movRect.shapeColor="green";

}
movRect.velocityX=5;
fixRect.velocityY=5;
function draw() {
   background(255,255,255); 
  if(movRect.x-fixRect.x<fixRect.width/2+movRect.width/2&&
    fixRect.x-movRect.x<fixRect.width/2+movRect.width/2) {
    movRect.velocityX=movRect.velocityX*(-1) ; 
    }
    if(movRect.y-fixRect.y<fixRect.height/2+movRect.height/2&&
      fixRect.y-movRect.y<fixRect.height/2+movRect.height/2) {
      movRect.velocityY=movRect.velocityY*(-1) ; 
      }

  drawSprites();
}