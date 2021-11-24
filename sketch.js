var fixedRect, movingrect;

function setup(){
  createCanvas(1200,800);
  fixedRect = CreateSprite(200,200,50,80);
  fixedRect.shapeColor= "green"
  movingrect = CreateSprite(400,200,80,30);
  movingrect.shapeColor= "green"
  
}

function draw(){
  background(0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (movingrect.x-fixedRect.x < fixedRect.width/2 + movingrect.width/2){
    fixedRect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
}