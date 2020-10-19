
var monkey , monkey_running,monkeyStop;
var banana ,bananaImage, obstacle,obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0,score=0;
var ground;
var PLAY= 1;
var gameState= PLAY;
var END= 0;
var roof;
var backgroundImage,backgroundg;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyStop=
    loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage = loadImage("jungle.jpg");
}



function setup() {
  createCanvas=(windowWidth,windowHeight);
   
 FoodGroup = new Group();
 obstacleGroup = new Group();
   
backgroundg=createSprite(200,200,10,10);
  backgroundg.addImage(backgroundImage);
    
   backgroundg.velocityX = -3 

    if (backgroundg.x < 0){
      backgroundg.x = backgroundg.width/2;
    }
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;

 roof=createSprite(200,50,400,5);

  
}


function draw() {
 background(225);
  
  if(gameState==PLAY){
    
     backgroundg.velocityX = -3 

    if (backgroundg.x < 0){
      backgroundg.x = backgroundg.width/2;
    }
         
    
   monkey.visible=true; 
    backgroundg.visible=true;
  
  if(keyDown("space")){
    monkey.velocityY = -12;
    
  }
   monkey.velocityY = monkey.velocityY + 1;   
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score = "+ score,100,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival time = "+ survivalTime,400,50)
     Banana();
  Obstacles();
    if( FoodGroup.isTouching(monkey)){
       FoodGroup.destroyEach();
      score=score+1;
       
    }
    if(obstacleGroup.isTouching(monkey)){
       gameState=END;
}
    
}  else if(gameState==END){
    if(keyDown("space")){
    monkey.velocityY = 0;
    
  }
  monkey.visible=false;
  ground.visible=false;
  backgroundg.visible=false;
  
  text("YOU LOSE! 'SPACE' TO RESTART THE GAME", 0,200);
    ground.VelocityX=0;
  FoodGroup.destroyEach();
 obstacleGroup.destroyEach();


  if(keyDown("space")){
    gameState=PLAY;
  }
  }

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

   
    
  
  ground.visible=false;
  roof.visible=false;
  monkey.bounceOff(roof)
 
  monkey.collide(ground);
  
  
  
  drawSprites();
}
function Banana(){
 var banana=createSprite(400,0,1,0);
  banana.scale=0.1;
  if(World.frameCount%80===0){
  
    r=Math.round(random(1,4));
    if(r==1){
      banana.addImage(bananaImage);
    }else if (r==2){
    banana.addImage(bananaImage); 
    }else if (r==3){
      banana.addImage(bananaImage);
    }else if (r==4){
      banana.addImage(bananaImage);
    }
    banana.y=Math.round(random(200,100));
    
    banana.velocityX=-7
    banana.setLifetime=100;
    FoodGroup.add(banana);
  }
}
function Obstacles(){
var obstacle=createSprite(300,100,1,1);
  obstacle.scale=0.1;
  if(World.frameCount%300===0){
  
    r=Math.round(random(1,4));
    if(r==1){
      obstacle.addImage(obstacleImage);
    }else if (r==2){
    obstacle.addImage(obstacleImage); 
    }else if (r==3){
      obstacle.addImage(obstacleImage);
    }else if (r==4){
      obstacle.addImage(obstacleImage);
    }
     obstacle.y=Math.round(random(330,330));
    
    
    obstacle.velocityX=-4
   obstacle.setLifetime=100;
    obstacleGroup.add(obstacle);
  }
}







