var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,200);
  monkey=createSprite(50,150,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
FoodGroup=createGroup();
obstaclesGroup=createGroup();
 ground = createSprite(200,180,1000,5);
 ground.velocityX=-4;
 ground.x = ground.width/2;
  console.log(ground.X)
  score=0;
}


function draw() {
background(250);
stroke("black");
fill("black");
textSize(15);
text("SURVIVAL TIME:"+score,250,20);
score=score+Math.round(getFrameRate()/60);
ground.velocityX=-(6+3*score/100);
if(ground.x<0){
  ground.x=ground.width/2;
}
if(keyDown("SPACE")){
  monkey.velocityY=-12;
}
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);
spawnFood();
spawnObstacles();
if(monkey.isTouching(obstaclesGroup)){
  stroke("black");
  fill("red");
  textSize(20);
  text("GAME OVER",250,100);
  obstacleGroup.velocityX=0;
  FoodGroup.velocityX=0;
  monkey.velocityX=0;
 }
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + score/100);
    obstacle.addImage(obstacleImage);
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.1;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 
 function spawnFood() {

   if (frameCount % 80 === 0) {
     var Food = createSprite(600,120,40,10);
     Food.y = Math.round(random(80,120));
     Food.addImage(bananaImage);
     Food.scale = 0.1;
     Food.velocityX = -3;
     
      //assign lifetime to the variable
     Food.lifetime = 200;
     
     //add each cloud to the group
     FoodGroup.add(Food);
   }
 }
 
 








