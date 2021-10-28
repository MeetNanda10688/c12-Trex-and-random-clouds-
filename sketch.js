var trex ,trex_running;
var ground,groundImage;
var cloudImage; 


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)

  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running ); 
  trex.scale = 0.5;

  ground = createSprite(200,180,400,20);
  ground.addImage("ground" ,groundImage);
  ground.velocityX = -2; 

  //create an invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible=false ; 
  
  edges = createEdgeSprites();

  var randomNum = Math.round(random(10,40));
  console.log(randomNum)

}

function draw(){
  background("white");

  //console.log(frameCount);

  if(keyDown("space") && trex.y > 160){
    trex.velocityY = -10;
  }
  
  //add gravity to bring the trex down
  trex.velocityY = trex.velocityY + 0.5;

  //infinite ground
  if(ground.x<0 ){
    ground.x = ground.width/2
  }

  //spawn the clouds
  spawnClouds();
  
  trex.collide(invisibleGround)

  drawSprites();
}

//function to spawn clouds
function spawnClouds(){
  if(frameCount % 60 === 0){
    var cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.scale = 0.7 ; 
    cloud.y = Math.round(random(10,60));
    cloud.velocityX = -3

    cloud.depth = trex.depth ; 
    trex.depth = trex.depth + 1 
  }
  
}