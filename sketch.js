var ground;
var man,man_running;
var bomb

function preload(){
  aground = loadImage("path.png");
man_running = loadAnimation("Runner-1.png","Runner-2.png");
bomb = loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
ground=createSprite(200,200);
ground.addImage(aground);

//creating boy running
man = createSprite(180,340,30,30);
man.addAnimation("running",man_running);
edges= createEdgeSprites();
}


function draw() {
  background(0);
  
 
man.collide(edges);

  drawSprites();
} 


