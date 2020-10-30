var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 100);
  movingRect = createSprite(200, 100, 100, 50);

  fixedRect.shapeColor = "lightblue"
  movingRect.shapeColor = "lightblue"
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  console.log(fixedRect.x - movingRect.x);

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "pink"
    movingRect.shapeColor = "pink"        
  }
  else{
    fixedRect.shapeColor = "lightblue"
    movingRect.shapeColor = "lightblue"
  }

  drawSprites();
}