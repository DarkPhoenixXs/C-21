var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor  = "yellow"
  object2 = createSprite(200,100,50,50);
  object2.shapeColor  = "yellow"
  object3 = createSprite(300,100,50,50);
  object3.shapeColor  = "yellow"
  object4 = createSprite(400,100,50,50);
  object4.shapeColor  = "yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,object4)){
   movingRect.shapeColor="purple"
   object4.shapeColor = "red"
}
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}


